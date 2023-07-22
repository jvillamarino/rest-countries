'use client';

import { Country } from '@/models/country.interface';
import { CountryCard } from './CountryCard';
import { useEffect, useState } from 'react';
import { LoadMoreButton } from '../buttons';

interface Props {
    countries: Country[];
}

export default function CountryList({ countries }: Props) {
    const [currentCountries, setCurrentCountries] = useState<Country[]>([]);
    const [data, setData] = useState<Country[]>([]);
    const [startPosition, setStartPosition] = useState<number>(0);
    const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

    useEffect(() => {
        setCurrentCountries(countries);
        setData([]);
        setStartPosition(0);
        setShowLoadMore(countries.length > 10);
    }, [countries]);

    useEffect(() => {
        const slice = currentCountries.slice(startPosition, startPosition + 10);
        if (slice.length) setData(data => [...data, ...slice]);
        if (!slice.length) setShowLoadMore(false);
    }, [startPosition, currentCountries]);

    const handleLoadMore = () => {
        setStartPosition(startPosition + 10);
    };

    return (
        <>
            <div className='country-list-grid'>
                {data.map((country: Country) => (
                    <div className='country-grid-item' key={country.name.official}>
                        <CountryCard country={country} />
                    </div>
                ))}
            </div>
            {showLoadMore && <LoadMoreButton onClick={handleLoadMore} />}
        </>
    );
}
