import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent {

apellido:string = "Cappellacci";
nombres:string  = "Pablo Andrés";
dni    :number  = 34319736;
fechNacimiento:Date = new Date( "1989-07-07" );
lugarNacimiento:string = "Rosario (Santa Fe) Argentina";
estCivil: string = "Casado";
hijos:string = 'Francisca'
domicilio: string = "Rosario (S2000) Santa Fe, Argentina";
celular:number =  3416455566;
emailPersonal:string = "pablocappe@gmail.com";
// emailLaboral:string = "pcappellacci@lasegunda.com.ar";
fotoPerfil:string = "https://media-exp1.licdn.com/dms/image/C4D03AQGDxfZ3Tv4d-Q/profile-displayphoto-shrink_200_200/0/1647280489741?e=1658966400&v=beta&t=ugK9M5DoLUKvfyocObcyFM76Lauc-BSn1R-PHga13bI"
  constructor() { }



}
