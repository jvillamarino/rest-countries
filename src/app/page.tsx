import { Country } from '../models/country.interface';
import CountryList from '../components/country-components/CountryList';
import { getAllCountries, getCountriesByRegion } from './api/country.api';
import { FilterComponent } from '@/components/filter';
import { PropsParams } from '@/models';

export default async function Home({ searchParams: { region } }: PropsParams) {
    const countries: Country[] = region ? await getCountriesByRegion(region as string) : await getAllCountries();

    return (
        <main className='main-container'>
            <FilterComponent />
            <CountryList countries={countries} />
        </main>
    );
}
