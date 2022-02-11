import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
 
import { ClaseListaComponent } from "./clase/clase-lista/clase-lista.component";
import { AlumnosListaComponent } from './alumno/alumnos-lista/alumnos-lista.component';
import { ProfesoresComponent } from './profesores/profesores/profesores.component';
import { PaginaNoEncontradaComponent } from './otros/pagina-no-encontrada/pagina-no-encontrada.component'

const appRutas: Routes = [
  { path: 'Alumno', component:AlumnosListaComponent },
  { path: 'Profesores', component: ProfesoresComponent},
  { path: '', redirectTo: '/profesores', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClaseListaComponent,
    AlumnosListaComponent,
    ProfesoresComponent,
    PaginaNoEncontradaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
