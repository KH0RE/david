import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators,  FormBuilder, FormGroupName, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any = FormGroup;
  tokenJwt: any;
  msg : any;
  ok = false
  error : any
  imgOk = false;
  imgErr = false;
  check = false;
  wrong = false;
  constructor(
    private router : Router,
    private api : ApiService
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
  });


  }

  login(){
    const form = this.loginForm;
    if(form.valid) {
      this.api.login(form.value.email, form.value.password)

      .subscribe((data: any) => {

        this.loginForm = new FormGroup({
          email: new FormControl(null),
          password : new FormControl(null)

        });
        this.ok = true;
        this.imgOk = true;
        this.msg = "Bienvenido !!"
        this.check = true;
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', data.user.id );
        console.log(data.user.id)
      }, error => {
        console.log(error);
        this.imgErr = true;
        this.ok = true;
        this.error = "No estás Registrado"
        this.wrong = true;
      })
    }
  }

  registro() {
    this.router.navigate(['guia/sign-up']);
  }

}
