export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
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
