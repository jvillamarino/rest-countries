import { Country } from '../models/country.interface';
import CountryList from '../components/country-components/CountryList';
import { getAllCountries } from './api/country.api';

export default async function Home() {
    const countries: Country[] = await getAllCountries();

    return (
        <main className='main-container'>
            <CountryList countries={countries} />
        </main>
    );
}
