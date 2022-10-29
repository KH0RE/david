import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user : any;
  destroy : any;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getToken().subscribe((res)=> {
      this.user = res;
      console.log(this.user.name);
    })
  }

  salir(){
    this.api.destroyToken().subscribe((res)=> {
      //this.destroy = localStorage.getItem('token');
      //console.log(this.destroy);
      let salir = localStorage.clear();
      console.log(salir, "Vuelve Pronto");
      this.router.navigate(['/guia'])
    })


  }

  home(){
    this.router.navigate(['guia/home']);
  }

  profile(){
    this.router.navigate(['guia/profile']);
  }

}
