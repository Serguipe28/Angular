import { Component, OnInit } from '@angular/core';
import { Alumno } from "../Interfaces/ialumno";
import { AlumnosService } from "../Services/alumnos.service";


@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css'],
  providers: [AlumnosService]
})
export class AlumnosListaComponent implements OnInit {

  claseSeleccionada: number = 1;
  alumnos: Alumno[] = [];

  constructor( private alumnoService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnoService.getAllAlumnos().subscribe(alumno => (this.alumnos = alumno));
  }

  alCambiarClase(opcionSeleccionada : number) : void{
    this.claseSeleccionada = opcionSeleccionada;
  }
}
