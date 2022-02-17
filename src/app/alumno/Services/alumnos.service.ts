import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


import { Alumno } from '../Interfaces/ialumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private _http: HttpClient) { }

  //Recoge todos los alumnos en un vector
  getAllAlumnos(): Observable<Alumno[]>{
    const path = "https://localhost:44358/api/Alumnos";
    return this._http.get<Alumno[]>(path);
  }

  //Recoge el alumnos seleccionado
  getOneAlumno(alumno: string): Observable<Alumno>{
    const path = "https://localhost:44358/api/Alumnos/" + alumno;
    return this._http.get<Alumno>(path);
  }
}
