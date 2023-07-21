'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

interface Props {
    regions: string[];
}

export function FilterDropdownButton({ regions }: Props) {
    const [isOpen, setOpen] = useState(false);

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
                                <Link href={`/?region=${region}`} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
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
