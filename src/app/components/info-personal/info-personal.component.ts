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
<<<<<<< HEAD
fotoPerfil:string = "/assets/images/Perfil.jpg"
=======
fotoPerfil:string = "../../../assets/images/Logo.png"
>>>>>>> 1a86dd7c1f771a7903fa26bcf1be6a96ee5bd725
  constructor() { }



}
