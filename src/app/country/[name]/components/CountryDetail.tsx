import { Country } from '@/models/country.interface';
import Image from 'next/image';
import './country-details.css';

export function CountryDetail({ country }: { country: Country }) {
    return (
        <div className='country-detail'>
            <Image className='country-image' src={country.flags.png} alt={country.flags.alt ?? country.name.official} width={650} height={650} />
            <div className='country-info'>
                <h2 className='country-info__title'>{country.name.common}</h2>
                <div className='country-info-container'>
                    <div className='country-info-container__left'>
                        <p className='paragraph-16'>
                            <strong>Native Name</strong>: {country.name.official}
                        </p>
                        <p className='paragraph-16'>
                            <strong>Population</strong>: {country.population}
                        </p>
                        <p className='paragraph-16'>
                            <strong>Region</strong>: {country.region}
                        </p>
                        <p className='paragraph-16'>
                            <strong>Sub Region</strong>: {country.subregion}
                        </p>
                        <p className='paragraph-16'>
                            <strong>Capital</strong>: {TextGroup(country.capital)}
                        </p>
                    </div>
                    <div className='country-info-container__right'>
                        <p className='paragraph-16'>
                            <strong>Top Level Domain</strong>: {TextGroup(country.tld)}
                        </p>
                        <p className='paragraph-16'>
                            <strong>Currencies</strong>: {TextGroup(Object.keys(country.currencies))}
                        </p>
                        <p className='paragraph-16'>
                            <strong>Languagess</strong>: {TextGroup(Object.values(country.languages))}
                        </p>
                    </div>
                </div>
                <div className='country-info__borders'>
                    <p className='paragraph-16'>
                        <strong>Border Countries:</strong> {BorderCountry(country.borders)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function TextGroup(values: string[]) {
    const data = values.reduce((acc: string, text: string, index: number) => `${acc}${index ? ',' : ''} ${text}`, '');
    return <>{data}</>;
}

export function BorderCountry(countryNames: string[]) {
    return countryNames.map((name: string) => (
        <span key={name} className='border-country'>
            {name}
        </span>
    ));
}
