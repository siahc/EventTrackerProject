import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Plant } from '../models/plant';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private baseUrl = '';

  index(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.baseUrl + '/api/plants').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Plant Service Index Failed');
      })
    )
  }

  constructor(private http: HttpClient) { }
}
