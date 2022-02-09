import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


import { Alumno } from '../Interfaces/ialumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos :Alumno[] = [];

  constructor(private _http: HttpClient) { }

  getAllAlumnos(): Observable<Alumno[]>{
    const path = "https://localhost:44358/api/Alumnos";
    return this._http.get<Alumno[]>(path);
  }
}
