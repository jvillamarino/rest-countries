import { API_URL } from './config';
import { Country } from '../models/country.interface';

/* DETAIL_FIELDS - A string of comma separated fields to be included in the detail query.*/
const DETAIL_FIELDS = 'flags,name,population,region,subregion,capital,tld,currencies,languages,borders';

/* MAIN_FIELDS - A string of comma separated fields to be included in the main query.*/
const MAIN_FIELDS = 'name,flag,population,flags,region,capital';

/**
 * apiProviderFunction
 *
 * This is an asynchronous function that serves as a helper function for making API requests using the Fetch API in TypeScript.
 * It takes in a URL and an optional hostname as parameters, and it returns a Promise that resolves to a Response object.
 *
 * @param {string} url
 * @param {string} [hostname]
 * @return {*}  {Promise<Response>}
 */
async function apiProviderFunction(url: string, hostname?: string): Promise<Response> {
    return fetch(`${hostname ?? API_URL}/${url}`);
}

/**
 * getAllCountries
 *
 * Fetch countries from the REST Countries API.
 *
 * @export
 * @param {string} [hostname='https://restcountries.com/v3.1']
 * @return {*}  {Promise<Country[]>}
 */
export async function getAllCountries(hostname: string = 'https://restcountries.com/v3.1'): Promise<Country[]> {
    const response: Response = await apiProviderFunction(`/all?fields=${MAIN_FIELDS}`, hostname);
    return response.json();
}

/**
 * getCountryByName
 *
 * Query a country by name from the REST Countries API.
 *
 * @export
 * @param {string} name
 * @param {string} [fields]
 * @return {*}  {Promise<Country>}
 */
export async function getCountryByName(name: string, fields?: string): Promise<Country> {
    const queryFields: string = fields ?? DETAIL_FIELDS;
    const response: Response = await apiProviderFunction(`/name/${name}?fields=${queryFields}`);
    return response.json().then(data => {
        if (data.length > 0) return data[0];
        return {};
    });
}

/**
 * filterCountryBy
 *
 * Query a list of countries by region or name from the REST Countries API.
 *
 * @export
 * @param {string} path
 * @param {string} [fields]
 * @return {*}  {Promise<Country[]>}
 */
export async function filterCountryBy(path: string, value: string, fields?: string): Promise<Country[]> {
    const queryFields: string = fields ?? DETAIL_FIELDS;
    const response: Response = await apiProviderFunction(`/${path}/${value}?fields=${queryFields}`);
    return response.json();
}
