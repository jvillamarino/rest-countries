'use client';

import { getAllCountries } from '@/api/country.api';
import { Country } from '@/models';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

export function FilterDropdownButton() {
    const [isOpen, setOpen] = useState(false);
    const [regions, setRegions] = useState<string[]>([]);

    useEffect(() => {
        async function getData() {
            const countries: Country[] = await getAllCountries();
            const mapedRegions = Array.from(countries.reduce((setAcc, country) => setAcc.add(country.region), new Set<string>())).sort();
            setRegions(mapedRegions);
        }
        getData();
    }, []);

    return (
        <div className='filter-button-container'>
            <button className='filter-button' type='button' onClick={() => setOpen(!isOpen)}>
                Filter By Region
                {isOpen ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
            </button>

            <div className='relative'>
                <div className={`${isOpen ? '' : 'filter-button-dropdown--hidden'} filter-button-dropdown`}>
                    <ul className='filter-dropdown-list' aria-labelledby='dropdownHoverButton'>
                        {regions.map(region => (
                            <li key={region}>
                                <Link onClick={() => setOpen(false)} href={`/?region=${region}`} className='filter-dropdown-list__item'>
                                    {region}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
