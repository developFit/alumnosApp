import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno.model';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url : string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAlumno(): Observable<any> {
    return this.http.get<Alumno>(this.url + '/alumnoapi/')
  }
}
