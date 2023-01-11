import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nomHijo!:string;
  @Input() dniHijo!:string;
  @Input() civilHijo!:string;

  registrado = [{}];

  agregar(){
    this.registrado = [{"nombre":this.nomHijo, "dni":this.dniHijo, "estado_civil":this.civilHijo}];
    // Tiempo de 5 segundos para borrar información
    setTimeout(()=>{
      this.registrado = [{}];
      console.log("Datos borrados");
    }, 5000)
  }
  

  constructor() { }

  ngOnInit(): void {
    this.agregar();
  }

}
