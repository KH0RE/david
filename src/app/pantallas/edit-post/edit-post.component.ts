import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Profile } from '../../models/profile';
import { Post } from '../../models/post';
import { Province } from 'src/app/models/province';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

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
   this.getUser();
   this.getProvinces();
   this.activeParams.params.subscribe(params => {
    this.id = params['id'];
    console.log(this.id)
    this.api.getSelectPost(this.id).subscribe((res : any) => {
      this.posts = res['post']
      console.log(res)
    })
   })

  }

    getUser (){
      this.api.getToken().subscribe((res)=> {
        this.user = res;
       // console.log(this.user);
      })
    }

    getProvinces() {
      this.api.getProvince().subscribe((data : any) => {
        this.provinces = data['provincias']
        //console.log(this.provinces)
      })
    }

    updatePost(){
      this.api.updatePost(this.id, this.posts).subscribe((data : any) => {
        console.log(data);
        //alert("Publicacion Actualizada");
        this.msg = "Publicación Actualizada"
      }, error => {
        console.log(error);
      })
    }

}
