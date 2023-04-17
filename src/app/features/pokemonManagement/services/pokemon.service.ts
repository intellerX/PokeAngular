import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Pokemon, PokemonFetch, PokemonUpdate } from '../models/pokemon';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  fetchPokemons(payload: PokemonFetch): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(`${environment.apiBaseUrl}?idAuthor=${payload.idAuthor}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  createPokemon(payload: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${environment.apiBaseUrl}`, payload).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  fetchPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.apiBaseUrl}${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  updatePokemonById(id: number, payload: PokemonUpdate): Observable<Pokemon> {
    return this.http
      .put<Pokemon>(`${environment.apiBaseUrl}${id}`, payload)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  deletePokemonById(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.apiBaseUrl}${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
