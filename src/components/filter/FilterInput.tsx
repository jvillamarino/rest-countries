'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export function FilterInput() {
    const [searchQuery, setSearchQuery] = useState('');
    const routes = useRouter();

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setSearchQuery(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        routes.push(`/?name=${encodedSearchQuery}`);
    }

    return (
        <form className='filter-input-container' onSubmit={event => handleSubmit(event)}>
            <label htmlFor='default-search' className='filter-input__label'>
                Search for a country...
            </label>
            <div className='relative'>
                <div className='filter-input__icon'>
                    <BiSearch />
                </div>
                <input
                    value={searchQuery}
                    onChange={event => handleSearch(event)}
                    id='default-search'
                    className='filter-input'
                    placeholder='Search for a country...'
                />
            </div>
        </form>
    );
}
