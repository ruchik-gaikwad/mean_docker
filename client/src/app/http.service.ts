import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';




@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  addUser(user){
    console.log(user)
    return this.http.post('http://localhost:8000/users', user)
    .map(response => {
      return response;
    })
  }
  getAllUsers(){
    return this.http.get('http://localhost:8000/users')
    .map(response => {
      return response.json();
    })
  }

  deleteUser(user) {
    return this.http.delete('http://localhost:8000/users', new RequestOptions({ body : user}))
    .map(response => {
      return response
    })
  }
}
