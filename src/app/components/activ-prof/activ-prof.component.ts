import { Component } from '@angular/core';
import { Trabajos } from 'src/app/interfaces/trabajos';
import { ExpLaboralService } from 'src/app/services/exp-laboral.service';

@Component({
  selector: 'app-activ-prof',
  templateUrl: './activ-prof.component.html',
  styleUrls: ['./activ-prof.component.css']
})
export class ActivProfComponent  {

 expLaboral:Trabajos[]=[];

 verMas:boolean = false;
  constructor(private laboralService:ExpLaboralService) { 

    this.expLaboral = this.laboralService.getExpLaboral();
  }

  
 verTexto(){
console.log('mostrar boton');
 }


  
}
