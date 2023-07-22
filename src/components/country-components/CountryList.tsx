'use client';

import { Country } from '@/models/country.interface';
import { CountryCard } from './CountryCard';
import { useEffect, useState } from 'react';
import { LoadMoreButton } from '../buttons';

interface Props {
    countries: Country[];
}

export default function CountryList({ countries }: Props) {
    const [data, setData] = useState<Country[]>([]);
    const [startPosition, setStartPosition] = useState<number>(0);
    const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

    useEffect(() => {
        const slice = countries.slice(startPosition, startPosition + 10);
        if (slice.length) setData(data => [...data, ...slice]);
        if (!slice.length) setShowLoadMore(false);
    }, [startPosition, countries]);

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
