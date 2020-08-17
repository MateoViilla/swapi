import { Film } from './film.model';
export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  filmsItem: Film[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
}

export interface CharacterResponse {
  count: number;
  results: Character[];
}
