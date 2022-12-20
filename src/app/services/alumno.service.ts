import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }


  public getAlumno(): Observable<any> {
    return this.http.get<any>('localhost:8090/getAlumnos')
  }
}
