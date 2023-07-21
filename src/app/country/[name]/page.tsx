import { getCountryByName } from '@/app/api/country.api';
import { BackButton } from '@/components/buttons/BackButton';
import { Country } from '@/models/country.interface';
import { CountryDetail } from './components/CountryDetail';

interface Props {
    params: {
        name: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params: { name } }: Props) {
    const country: Country = await getCountryByName(name, 'flags');
    return {
        title: decodeURIComponent(name),
        description: country.flags.alt,
    };
}

export default async function CountryPage({ params: { name } }: Props) {
    const country: Country = await getCountryByName(name);
    return (
        <main className='main-container main-container--left-items'>
            <BackButton />
            <CountryDetail country={country} />
        </main>
    );
}
