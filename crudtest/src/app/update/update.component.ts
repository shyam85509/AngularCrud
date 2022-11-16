import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  updateForm : FormGroup
  constructor(
     private activateRout : ActivatedRoute,
    private udateService: AuthService, private route : Router) { 
    this.updateForm = new FormGroup({
      first_name : new FormControl(''),
      email : new FormControl('')
    })
  }

  ngOnInit(): void {
    
    let uId = this.activateRout.snapshot.params['id']
    console.log("userId", uId);
    
    this.udateService.editUser(uId).subscribe(res =>{
      console.log("User Data", res);

      this.updateForm.patchValue(res.data);
    })





  }

  updateUser(){
    let payload = this.updateForm.value;
    console.log('payload',payload);
    
    this.udateService.updatUsers(this.activateRout.snapshot.params['id'] , payload).subscribe(res =>{
      
      console.log('updatedData',res);
      alert("Do You Want to Save The Changes....?");
      this.route.navigate(['/home'])
    
    })
  }
}




   




