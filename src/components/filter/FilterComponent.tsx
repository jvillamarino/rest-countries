import { FilterDropdownButton } from './FilterButton';
import { FilterInput } from './FilterInput';
import './filter.css';

export function FilterComponent({ regions }: { regions: string[] }) {
    return (
        <div className='filter'>
            <div className='filter-container'>
                <FilterInput />
                <FilterDropdownButton regions={regions} />
            </div>
        </div>
    );
}
