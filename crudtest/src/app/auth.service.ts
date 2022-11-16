import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  

  getUsers() : Observable <any> {
    return this.http.get("https://reqres.in/api/users/")
  }

  deleteUsers(id:number) : Observable <any> {
    return this.http.delete("https://reqres.in/api/users/" +id)
  }


  editUser(id:number) : Observable <any> {
    return this.http.get("https://reqres.in/api/users/" +id)
  }




  updatUsers(id:number, data:any) : Observable<any>{
    return this.http.put("https://reqres.in/api/users/" +id, data)
  }
  
}

