import { Country } from '../models/country.interface';
import CountryList from '../components/country-components/CountryList';
import { getAllCountries } from './api/country.api';
import { FilterComponent } from '@/components/filter';

export default async function Home() {
    const countries: Country[] = await getAllCountries();
    const regions = Array.from(countries.reduce((setAcc, country) => setAcc.add(country.region), new Set<string>())).sort();

    return (
        <main className='main-container'>
            <FilterComponent regions={regions} />
            <CountryList countries={countries} />
        </main>
    );
}
