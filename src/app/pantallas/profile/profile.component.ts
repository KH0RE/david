import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Profile } from '../../models/profile';
import { Post } from '../../models/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any;
  imageForm : any = FormGroup;
  image: any = "../../assets/perfil.jpg";
  description : any;
  file: any;
  profile = new Profile();
  profiles : any;
  post = new Post();
  posts : any;
  msg : any;
  boton = false;
  eliminado = false;
  borrar : any;
  constructor(
    private api : ApiService,
    private router : Router,
    private http : HttpClient
  ) { this.profiles = [];
      this.posts = [];
  }

  ngOnInit(): void {
    this.userAuth();
    this.getProfile();
    this.getPostPRofile();
    this.imageForm = new FormGroup({
      description : new FormControl(null, Validators.required),
      file : new FormControl(null, Validators.required)
  });
  }

  userAuth(){
    this.api.getToken().subscribe((res)=> {
      this.user = res;
      console.log(this.user.name);
    })
  }


  onFileChange(event : any) {
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.type.includes('image')) {
        const reader = new FileReader()
        reader.readAsDataURL(file);

        reader.onload = function load(this: any) {

          fileSource : reader.result;
          this.image = reader.result;
        }.bind(this);
        this.file = file;
        this.image = "../../assets/perfil.jpg";
      }else {
        console.log("error");
      }
    }
  }


  onSubmit(){
    const form = this.imageForm;
   // console.log(this.file)
    if(form.valid) {
      this.api.profile(form.value.description, this.file )
      .subscribe((res) => {
        this.imageForm = new FormGroup({
          description: new FormControl(null),
          file: new FormControl(null),

        })
        this.msg = "Perfil Creado Con Éxito  !!"
        this.image = "../../assets/perfil.jpg";
        console.log(res)
      }, error => {
        console.log(error)
      })
    }

  }

    getProfile(){
      this.api.getProfile().subscribe((data : any) => {

        this.profiles = data['profile']
        //console.log(this.profiles)



      }, error => {
        console.log(error);

      })
    }

    getPostPRofile(){
      this.api.getPostProfile().subscribe((data : any) => {
        this.posts = data['posts'];
        console.log(this.posts)
      })
    }

    selectPost(id : string){
      this.router.navigate(['guia/edit-post/', id])
      //console.log(id)
    }

    delete(id : any){
      this.api.deletePost(id).subscribe((res) => {
        //console.log("eliminado")
        //alert("eliminado")
        this.eliminado = true;
        this.borrar = "Publicación Eliminada Con Éxito";
        this.getPostPRofile();
      })

    }

}
