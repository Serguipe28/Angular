import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ClaseListaComponent } from "./clase/clase-lista/clase-lista.component";
import { FormsModule } from '@angular/forms';
import { AlumnosListaComponent } from './alumno/alumnos-lista/alumnos-lista.component'

@NgModule({
  declarations: [
    AppComponent,
    ClaseListaComponent,
    AlumnosListaComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
