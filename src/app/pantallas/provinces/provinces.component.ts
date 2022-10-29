import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Profile } from '../../models/profile';
import { Post } from '../../models/post';
import { Province } from 'src/app/models/province';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {

  user: any;
  id : any;
  msg : any;
  post = new Post();
  posts : any;
  imageForms : any =FormGroup;
  image: any = "../../assets/perfil.jpg";
  description : any;
  title : any;
  address : any;
  provinces_id : any;
  file: any;
  //provinces : Province[];
  province = new Province();
  provinces :any

  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeParams.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.api.getProvinces(this.id).subscribe((res : any)=> {
        this.posts = res['posts']
        this.provinces = res['provincia']
        console.log(this.posts)
        console.log(this.provinces)
      })
    })
  }

}
