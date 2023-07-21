import { getCountryByName } from '@/api/country.api';
import { BackButton } from '@/components/buttons';
import { Country } from '@/models/country.interface';
import { CountryDetail } from './components/CountryDetail';
import { PropsParams } from '@/models';

export async function generateMetadata({ params: { name } }: PropsParams) {
    const country: Country = await getCountryByName(name, 'flags');
    return {
        title: decodeURIComponent(name),
        description: country.flags.alt,
    };
}

export default async function CountryPage({ params: { name } }: PropsParams) {
    const country: Country = await getCountryByName(name);
    return (
        <main className='main-container main-container--detail-page'>
            <BackButton />
            <CountryDetail country={country} />
        </main>
    );
}
