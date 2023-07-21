export interface Country {
    region: string;
    subregion: string;
    capital: string[];
    borders: string[];
    tld: string[];
    population: number;
    flags: Flags;
    name: Name;
    currencies: Currency;
    languages: Language;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common: string;
    official: string;
}

export interface Currency {
    [x: string]: {
        name: string;
        symbol: string;
    };
}

export interface Language {
    [x: string]: string;
}
