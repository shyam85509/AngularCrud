import { Component, OnInit, Input, Type } from '@angular/core';

import { Route, Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any=[]
  p:any;
  constructor(private userService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res.data
      console.log('Array', this.users);
      
      
    })
  }
  editUser(id:number){
    console.log(id);
    
    this.route.navigate(['/update', id])
  }
  
  deletUser(id:any){
    this.userService.deleteUsers(id).subscribe (res => {
      console.log(res);
      this.users.splice(id,1)
      
    })
    
  }
}
