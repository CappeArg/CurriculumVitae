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
fotoPerfil:string = "https://lh3.googleusercontent.com/pw/AM-JKLW_-5GlTqflKY2RXGyO2DYfzmordkY81wF2AiN0mX5a8nnagSvsUwWeR2eRMhsXNVOrC0S6izYWuKaS9X-M_KV2jQUQIxBxrXhNFFIlVMs8NDdzF996wmsQgFna6qH3JwcRqi1nCAoEnP-6SoKuk7cdFg=s200-no?authuser=0"
  constructor() { }



}
