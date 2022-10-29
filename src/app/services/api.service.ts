import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { Post } from '../models/post';
import { Province } from '../models/province';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:8000/api/auth';

  constructor(

    private http : HttpClient

  ) { }


    /* Registrar User */
    createUser(name : string, email : string, password : string ): Observable<Object> {
        const form = new FormData()
        form.append('name', name),
        form.append('email', email),
        form.append('password', password)
        return this.http.post<Object>(`${this.url}/signup`, form);
    }

    login(email : string, password : string ) : Observable<Object> {
      const form = new FormData()
      form.append('email', email),
      form.append('password', password)

      return this.http.post<Object>(`${this.url}/login`, form);
    }


    getToken(){
      const user: any = localStorage.getItem('token')

      const headers = new HttpHeaders({
        Authorization: `Bearer ${user}`,
      });
      return this.http.get(`${this.url}/user`, {headers : headers})

    }

    destroyToken(){
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
        Authorization: `Bearer ${user}`,
      });
      return this.http.get(`${this.url}/logout`, {headers : headers})
    }

    profile(description : string, file: File): Observable<Object> {

      const formdata = new FormData();
      formdata.append('description', description);
      formdata.append('file', file, );
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.post<Object>(`${this.url}/pro`, formdata, {  headers : headers})
    }

    getProfile(): Observable<Object> {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.get<Profile[]>(`${this.url}/pros`, {headers : headers})
    }

    getPostHome() :  Observable<Object>  {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.get<Post[]>(`${this.url}/post`, {headers : headers})
    }

    getProvince() : Observable<Object>  {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.get<Post[]>(`${this.url}/provin`, {headers : headers})
    }

    post(title: string, address: string, description: string, provinces_id: string, file : File): Observable<Object>{
      const formdata = new FormData();
      formdata.append('title', title);
      formdata.append('address', address);
      formdata.append('provinces_id', provinces_id);
      formdata.append('description', description);
      formdata.append('file', file, );
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
     // console.log(title)
      return this.http.post<Object>(`${this.url}/post`, formdata, {  headers : headers});
    }

    getPostProfile(): Observable<Object> {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.get<Post[]>(`${this.url}/posts`, {headers : headers})
    }

    getSelectPost(id : string): Observable<Object>{
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.get<Post[]>(`${this.url}/post/${id}`, {headers : headers})
    }

    updatePost(id : string, data: any) {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.put<Object[]>(`${this.url}/post/${id}`, data, {headers : headers})
    }

    deletePost(id : string): Observable<Object> {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.delete<Object[]>(`${this.url}/post/${id}`, {headers : headers})
    }

    getProvinces(id : string): Observable<Object> {
      const user: any = localStorage.getItem('token')
      const headers = new HttpHeaders({
       // 'Content-Type' : 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
       'Accept' : 'application/json',
        'Authorization' : `Bearer ${user}`
      });
      return this.http.get<Object[]>(`${this.url}/provin/${id}`, {headers : headers})
    }

}
