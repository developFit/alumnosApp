import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-lista-alimnos',
  templateUrl: './lista-alimnos.component.html',
  styleUrls: ['./lista-alimnos.component.css']
})

export class ListaAlimnosComponent {
  
  constructor (public service : AlumnoService){}

  listaAlumnos: Alumno[] = [];

  ngOnInit() {
    this.service.getAlumno().subscribe(
      resp => {
        this.listaAlumnos = resp;
      }
    );
  }


}
