import { Component, OnInit } from '@angular/core';
import {UserService}from '../user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,private userservice:UserService) { }
  
  user:User=new User;
  submitted=false;
  
  ngOnInit() {
    var userid = window.localStorage.getItem("edit-id");



    if (userid != null && userid != "") {

      //this.message = "Update Recored";



      this.userservice.find((userid))



        .subscribe(data => {

          this.user = data; this.usersaveform.setValue(this.user)


        });



    }

    this.submitted=false;
  }
  usersaveform=new FormGroup({

    id:new FormControl('',[Validators.required, Validators.minLength(5)]),
  
    userName:new FormControl('',[Validators.required, Validators.minLength(5)]),
  
    password:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
  
    email:new FormControl('',[Validators.required, Validators.email]),
  
    contact:new FormControl('',[Validators.required]),
  
    userType:new FormControl('',[Validators.required]),
  
    confirmed:new FormControl('',[Validators.required])
  
   })
  
   saveUser(saveUser){
  
    this.user=new User();
  
    this.user.id=this.usersaveform.get('id').value;
  
    this.user.userName=this.usersaveform.get('userName').value;
  
    this.user.password=this.usersaveform.get('password').value;
  
    this.user.email=this.usersaveform.get('email').value;
  
    this.user.contact=this.usersaveform.get('contact').value;
  
    this.user.userType=this.usersaveform.get('userType').value;
  
    this.user.confirmed=this.usersaveform.get('confirmed').value;
  
    this.submitted=true;
  
    this.save();
  
   }
  
   save(){
  
    this.userservice.saveUser(this.user).subscribe(data=>console.log(data), error=>console.log(console.error()));
  
    this.user=new User();
  
   }
   usersaveForm()
{
  this.submitted=false;
  this.usersaveform.reset();
}


}
