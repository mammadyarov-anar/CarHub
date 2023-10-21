import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  customHeaders = {
    'X-RapidAPI-Key': '619ec219famsh78510ed24efbd3fp1e594ajsn3c5bfc5abd6a',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  cars$: BehaviorSubject<any[]> = new BehaviorSubject([] as any);

  constructor(private http: HttpClient) {}

  getCars(params: any): Observable<any> {
    return this.http.get<any>(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      { headers: new HttpHeaders(this.customHeaders), params }
    );
  }
}
