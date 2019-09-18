import { Component, OnInit } from '@angular/core';
import { Gestor} from '../gestor'; //importa da classe gestor criada dentro do src/app/gestor.ts
import { GESTORES } from '../gestores-mock';


@Component({
  selector: 'app-devengers', //o seletor do component do css
  templateUrl: './devengers.component.html', // o local do template do component
  styleUrls: ['./devengers.component.css'] // o local dos estilos de css do component
})
export class DevengersComponent implements OnInit {

  gestores = GESTORES;


  selectedGestor: Gestor;







  constructor() {} 
  

  ngOnInit() { //eh chamado apos ter sido criado o component. Um bom lugar para botar a logica inicial


  }


  onSelect(gestor: Gestor): void {
    this.selectedGestor = gestor;
  }

}
