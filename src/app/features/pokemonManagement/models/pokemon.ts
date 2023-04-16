export interface Pokemon {
  id: number;
  name: string;
  image?: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
  idAuthor?: number;
}

export interface PokemonFetch {
  idAuthor: number;
}

export interface PokemonUpdate {
  name: string;
  image?: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
  idAuthor: number;
}
