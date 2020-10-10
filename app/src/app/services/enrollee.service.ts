import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollee } from '../models/enrollee';
import { enrolleesUrls } from '../urls';

@Injectable({ providedIn: 'root' })
export class EnrolleeService {
  constructor(private http: HttpClient) {}

  getAllEnrollees(): Observable<Enrollee[]> {
    return this.http.get<Enrollee[]>(enrolleesUrls);
  }

  getEnrolleeById(id: string): Observable<Enrollee> {
    return this.http.get<Enrollee>(enrolleesUrls + `/${id}`);
  }

  updateEnrollee(enrollee: Enrollee): Observable<Enrollee> {
    return this.http.put<Enrollee>(enrolleesUrls + `/${enrollee.id}`, enrollee);
  }
}
