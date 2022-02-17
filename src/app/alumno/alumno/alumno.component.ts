import { Component, OnInit } from '@angular/core';
import { Alumno } from "../Interfaces/ialumno";
import { AlumnosService } from "../Services/alumnos.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnosService]
})
export class AlumnoComponent implements OnInit {

   alumno: Alumno | undefined ;

  constructor(private losAlumnos: AlumnosService, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    let nomAlumno : string = this.activatedRoute.snapshot.params['nombre'];
    this.losAlumnos.getOneAlumno(nomAlumno).subscribe(alumno => (this.alumno = alumno));

  }

}
