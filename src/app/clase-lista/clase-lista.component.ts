import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Clase } from "./../Interfaces/iclase";
import { ClaseService } from "./../services/clase.service";

@Component({
  selector: 'app-clase-lista',
  templateUrl: './clase-lista.component.html',
  styleUrls: ['./clase-lista.component.css'],
  providers: [ClaseService]
})
export class ClaseListaComponent implements OnInit {

  clases: Clase[] = [];
  claseElegida: number = 1;
  
  @Output()
  globalElegida: EventEmitter<number> = new EventEmitter<number>();

  constructor(private claseService: ClaseService) { }

  ngOnInit(): void {
    this.claseService.getAllClases().subscribe(clase =>(this.clases = clase));
  }

  getClases(){
    console.log(this.clases);
  }

  cuandoCambiemos(){
    this.globalElegida.emit(this.claseElegida);
  }
  

}
