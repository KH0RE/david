import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators,  FormBuilder, FormGroupName, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm : any = FormGroup;

  creado = true;
  msg : any;
  constructor(
    private router : Router,
    private api : ApiService
  ) { }

  ngOnInit( ): void {
    this.registroForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
  });

}


onSubmit(){
  const form = this.registroForm;
  if(form.valid) {
    this.api.createUser(form.value.name, form.value.email, form.value.password)
    .subscribe(data => {

      this.registroForm = new FormGroup({
        name : new FormControl(null),
        email : new FormControl(null),
        password : new FormControl(null),
      });
      this.creado = true;
      this.msg = 'Usuario Creado con Exito !!';

    }, error => {
      console.log(error);
    })
  }
}


}
