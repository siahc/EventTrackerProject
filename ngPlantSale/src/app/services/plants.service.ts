import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private baseUrl = environment.apiUrl || '';

  list(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.baseUrl + '/api/plants').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Plant Service list() Failed: ' + err.status + ' ' + err.statusText);
      })
    );
  }

  get(id: number): Observable<Plant> {
    return this.http.get<Plant>(this.baseUrl + '/api/plants/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Plant Service get() Failed: ' + err.status + ' ' + err.statusText);
      })
    );
  }

  create(plant: Plant): Observable<Plant> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http
      .put<Plant>(this.baseUrl + '/api/plants/', JSON.stringify(plant), {
        headers: headers,
      })
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Plant Service create() Failed: ' + err.status + ' ' + err.statusText);
        })
      )

  }

  update(plant: Plant): Observable<ArrayBuffer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http
      .patch<ArrayBuffer>(this.baseUrl + '/api/plants/' + plant.id, JSON.stringify(plant), {
        headers: headers,
      })
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Plant Service get() Failed: ' + err.status + ' ' + err.statusText);
        })
      );
  }

  delete(id: number): Observable<Plant> {
    return this.http.delete<Plant>(this.baseUrl + '/api/plants/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Plant Service get() Failed: ' + err.status + ' ' + err.statusText);
      })
    );
  }

  constructor(private http: HttpClient, ) {}
}
