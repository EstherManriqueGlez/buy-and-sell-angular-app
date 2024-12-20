import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<Listing[]> {
    console.log('Getting Data');
    return this.http.get<Listing[]>('/api/listings');
  }
}
