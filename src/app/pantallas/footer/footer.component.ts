import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Profile } from '../../models/profile';
import { Post } from '../../models/post';
import { Province } from 'src/app/models/province';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
  alert = false;
  msg : any
  constructor(
    private api : ApiService,
    private router : Router
  ) {  }

  ngOnInit(): void {
      this.getProvinces();
      this.imageForms = new FormGroup({
        title : new FormControl(null, Validators.required),
        address : new FormControl(null, Validators.required,),
        description : new FormControl(null, Validators.required),
        provinces_id : new FormControl(null, Validators.required),
        file : new FormControl(null, Validators.required)
      });
  }

 /* onIdChange(event : any){
    this.province = event.target.value;
    console.log(this.province)
  }*/

  getProvinces() {
    this.api.getProvince().subscribe((data : any) => {
      this.provinces = data['provincias']
      //console.log(this.provinces)
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
    const form = this.imageForms;
    //console.log(this.provinces)

      this.api.post(form.value.title, form.value.address,  form.value.description, form.value.provinces_id, this.file )
      .subscribe((data)  => {

        this.imageForms = new FormGroup({
          title: new FormControl(null),
          address: new FormControl(null),
          description: new FormControl(null),
          provinces_id: new FormControl(null),
          file: new FormControl(null),

        })
        this.alert = true;
        this.msg = "Publicación creada con éxito  !!"
        this.image = "../../assets/perfil.jpg";
        console.log(data)
      }, error => {
        console.log(error)
      })

  }

}
