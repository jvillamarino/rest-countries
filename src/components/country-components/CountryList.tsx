import { Country } from '@/models/country.interface';
import { CountryCard } from './CountryCard';

interface Props {
    countries: Country[];
}

export default function CountryList({ countries }: Props) {
    return (
        <div className='country-list-grid'>
            {countries.map((country: Country) => (
                <div className='country-grid-item' key={country.name.official}>
                    <CountryCard country={country} />
                </div>
            ))}
        </div>
    );
}
