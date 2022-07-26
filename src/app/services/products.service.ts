import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import {Product} from "../models/product";
import {catchError, Observable, throwError} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const baseUrl = `${environment.apiUrl}/api/products`;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get<Product[]>(baseUrl)
      .pipe(catchError(this.errorHandler));
  }

  getById(id: number) {
    return this.http
      .get<Product>(`${baseUrl}/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  create(params: any) {
    return this.http.post(baseUrl, params, httpOptions);
  }

  update(id: number, params: any) {
    return this.http
      .put(`${baseUrl}/${id}`, params, httpOptions)
      .pipe(catchError(this.errorHandler));

  }

  delete(id: number) {
    return this.http
      .delete(`${baseUrl}/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(errorResponse: HttpErrorResponse): Observable<never> {
    if (errorResponse instanceof ErrorEvent) {
      console.error('Client side error: ', errorResponse);
    } else {
      console.error('Server side Error: ' + errorResponse.message);
    }
    return throwError('Message');
  }
}
