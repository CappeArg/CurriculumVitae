import { Component } from '@angular/core';
import { FormacionService } from 'src/app/services/formacion.service';
import { Carreras, Cursos } from '../../interfaces/formacion';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {

  carreras:Carreras[]=[];
  cursos:Cursos[]=[];

  constructor(private formacionServicio:FormacionService ) { 

    this.carreras= this.formacionServicio.getCarreras();
    this.cursos= this.formacionServicio.getCursos();
  }



}
