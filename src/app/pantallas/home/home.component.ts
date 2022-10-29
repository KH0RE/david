import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { Province } from '../../models/province';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  post = new Post();
  posts : any;
  province = new Province();
  provinces : any;

  constructor(
    private api : ApiService,
    private router : Router,
  ) {


   }

  ngOnInit(): void {
    this.getPosts();
    this.getProvinces();
    this.api.getToken().subscribe((res)=> {
      this.user = res;
     // console.log(this.user);
    })

  }

  getPosts(){
    this.api.getPostHome().subscribe((data : any) => {
      this.posts = data['posts']

      console.log(this.posts)

    })
  }


  getProvinces() {
    this.api.getProvince().subscribe((data : any) => {
      this.provinces = data['provincias']
      console.log(this.provinces)
    })
  }

  selectPost(id : string){
    this.router.navigate(['guia/provinces/', id])

  }

}
