import { FilterDropdownButton } from './FilterButton';
import { FilterInput } from './FilterInput';
import './filter.css';

export function FilterComponent() {
    return (
        <div className='filter'>
            <div className='filter-container'>
                <FilterInput />
                <FilterDropdownButton />
            </div>
        </div>
    );
}
