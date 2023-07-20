import { API_URL } from '../config';
import { Country } from '../../models/country.interface';

async function apiProviderFunction(url: string, hostname?: string): Promise<Response> {
    return fetch(`${hostname ?? API_URL}/${url}`);
}

export async function getAllCountries(): Promise<Country[]> {
    const response: Response = await apiProviderFunction('/all?fields=name,flag,population,flags,region,capital');

    return response.json();
}

export async function getCountryByName(name: string): Promise<Country> {
    const response: Response = await apiProviderFunction(
        `/name/${name}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`,
    );

    return response.json().then(data => {
        if (data.length > 0) return data[0];
        return {};
    });
}
