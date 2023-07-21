import { Country } from '../models/country.interface';
import CountryList from '../components/country-components/CountryList';
import { getAllCountries, filterCountryBy } from '../api/country.api';
import { FilterComponent } from '@/components/filter';
import { PropsParams } from '@/models';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: PropsParams) {
    const { key, value } = Object.entries(searchParams).reduce((_, [key, value]) => ({ key, value }), {}) as { key: string; value: string };

    const countries: Country[] = key && value ? await filterCountryBy(key, value as string) : await getAllCountries();
    console.log(countries);

    return (
        <main className='main-container'>
            <FilterComponent />
            <CountryList countries={countries} />
        </main>
    );
}
