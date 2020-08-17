import { ApiGateway } from './../../core/constants/api-gateway';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FilmsResponse } from './../../models/film.model';

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
