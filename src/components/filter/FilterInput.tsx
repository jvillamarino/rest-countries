import { BiSearch } from 'react-icons/bi';

export function FilterInput() {
    return (
        <form className='filter-input-container'>
            <label htmlFor='default-search' className='filter-input__label'>
                Search for a country...
            </label>
            <div className='relative'>
                <div className='filter-input__icon'>
                    <BiSearch />
                </div>
                <input type='search' id='default-search' className='filter-input' placeholder='Search for a country...' />
            </div>
        </form>
    );
}
