import { Country } from '@/models/country.interface';
import Image from 'next/image';
import Link from 'next/link';
import './country-components.css';

export function CountryCard({ country }: { country: Country }) {
    return (
        <div className='country-card'>
            <Link href={`/country/${country.name.official}`}>
                <Image className='country-card__image' src={country.flags.png} alt={country.flags.alt ?? country.name.official} width={400} height={400} />
            </Link>

            <div className='card-body'>
                <Link href={`/country/${country.name.official}`}>
                    <h3 className='card-body__title'>{country.name.common}</h3>
                </Link>

                <div className='card-paragraph-container'>
                    <p className='card-paragraph'>
                        <strong>Population</strong>: {country.population}
                    </p>
                    <p className='card-paragraph'>
                        <strong>Region</strong>: {country.region}
                    </p>
                    <p className='card-paragraph'>
                        <strong>Capital</strong>: {country.capital}
                    </p>
                </div>
            </div>
        </div>
    );
}
