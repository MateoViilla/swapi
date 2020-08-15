import { FilmsResponse } from './../../models/film.model';
import { CharacterResponse } from './../../models/character.model';
import { ApiGateway } from './../../shared/constants/api-gateway';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Character } from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<FilmsResponse> {
    const url = `${ApiGateway.FILMS}`;
    return this.http.get<FilmsResponse>(url).pipe(delay(1000));
  }
}
