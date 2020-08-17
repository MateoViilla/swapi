import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Character } from 'src/app/models/character.model';
import { ApiGateway } from './../../core/constants/api-gateway';
import { Film } from './../../models/film.model';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getFilmCharacters(id: string): Observable<Character[]> {
    const url = `${ApiGateway.FILMS}/${id}/`;
    return this.http.get<Film>(url)
      .pipe(switchMap((film: Film) =>
        forkJoin(film.characters.map(characterUrl =>
          this.http.get<Character>(characterUrl).pipe(
            switchMap(character =>
              forkJoin(character.films.map(filmUrl => this.http.get<Film>(filmUrl)))
                .pipe(map(filmsItem => {
                  return {
                    ...character,
                    filmsItem
                  };
                }))
            )
          )
        ))
      ));
  }
}
