import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nomHijo!:any;
  @Input() dniHijo!:any;
  @Input() civilHijo!:any;

  registrado = [{"nombre":"this.nomHijo", "dni":"this.dniHijo", "estado_civil":"this.civilHijo"}]

  constructor() { }

  ngOnInit(): void {
  }

}
