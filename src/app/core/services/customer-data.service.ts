import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CustomerDto } from '../models/customer-dto';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerDataService {
  private http: HttpClient = inject(HttpClient);
  private serverUri: string = environment.apiUrl;

  constructor() {}

  public getCustomers(): Observable<Array<CustomerDto>> {
    return this.http
      .get<Array<CustomerDto>>(`${this.serverUri}/customers`)
      .pipe(catchError(() => of(new Array<CustomerDto>())));
  }

  public getCustomer(id: string): Observable<CustomerDto> {
    return this.http
      .get<CustomerDto>(`${this.serverUri}/customers/${id}`)
      .pipe(catchError(() => of({} as CustomerDto)));
  }
}
