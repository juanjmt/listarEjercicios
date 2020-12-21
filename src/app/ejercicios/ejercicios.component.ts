import { Component, OnInit } from '@angular/core';
import {Ejercicio} from '../ejercicio';
import {EJERCICIOS} from '../collection-ejercicios';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios=EJERCICIOS;
  //ejercicioSeleccionado:Ejercicio;
  ejercicioSeleccionado=[];
  ejercicioSel:any;

  /*
  ejercicio : Ejercicio={
    id:1,
    name:'Flexiones'

  };*/
  //ejercicio='Flexion';
  constructor() { }

  ngOnInit(): void {
  }

  onSelectEjercicio(ejercicio:Ejercicio):void{
    console.log('info recibida '+ejercicio.name);
    this.ejercicioSel=ejercicio.name;
    this.ejercicioSeleccionado.push(ejercicio.name);
  }

}
