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

  //Carga todos los alumnos en el vector
  ngOnInit(): void {
    this.alumnoService.getAllAlumnos().subscribe(alumno => (this.alumnos = alumno));
  }

  //Cambia la clase seleccionada en el desplegable
  alCambiarClase(opcionSeleccionada : number) : void{
    this.claseSeleccionada = opcionSeleccionada;
  }
}
