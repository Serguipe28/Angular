import { Component, OnInit } from '@angular/core';
import { Clase } from "../Interfaces/iclase";
import { ClaseService } from "../Services/clase.service";


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases: Clase[] = [];

  constructor(private claseService: ClaseService) { }

  ngOnInit(): void {
    this.claseService.getAllClases().subscribe(clase =>(this.clases = clase));
  }

}
