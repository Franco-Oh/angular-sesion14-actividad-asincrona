import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public formLogin!: FormGroup;

  // Para activar mensaje cuando es enviado
  mensaje = false;

  // opciones de estado civil
  estadoCivil = ["Soltero", "Casado", "Divorciado"]

  nomHome!:any;
  dniHome!:any;
  civilHome!:any;

  constructor(private formBuilder:FormBuilder) { }

  // Validacion de formulario
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      dni:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(8)
        ]
      ],
      civil:['', 
        [
          Validators.required,
        ]
      ]
    });
  }

  send(): any{
    console.log(this.formLogin.value);
    this.mensaje = true;
    // Tiempo de 5 segundos para borrar información
    setTimeout(()=>{
      this.mensaje = false;
      console.log("Datos ocultados");
    }, 5000)
  }

}
