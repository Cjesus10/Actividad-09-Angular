import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  num1 = 0;
  num2 = 0;
  opcion = "ninguno";
  color ="";

  Color(){
    if(this.opcion=='suma'){
      this.color = 'blue'
    }
    else if(this.opcion == 'resta'){
      this.color = 'green'
    }
    else if(this.opcion == 'multi'){
      this.color = 'orange'
    }
    else if(this.opcion == 'div'){
      this.color = 'gray'
    }
  }
  
}
