import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
userNew:User=new User();
  constructor(private router: Router, private userservice:UserService) { }
  user: User = new User();
  submitted = false;


  ngOnInit() {
    this.submitted = false;
  }
  
 usersaveform = new FormGroup({

  //id: new FormControl('', [Validators.required, Validators.maxLength(5)]),

  userName: new FormControl('', [Validators.required, Validators.minLength(5)]),

  password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),

  //email: new FormControl('', [Validators.required, Validators.email]),

  //contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),

  //userType: new FormControl('', [Validators.required]),

  //confirmed: new FormControl('', [Validators.required])

 })

 saveUser(saveuser) {

  this.user = new User();

  // this.user.id = this.usersaveform.get('id').value;

  //console.log(this.user.id);

  this.user.userName = this.usersaveform.get('userName').value;

  this.user.password = this.usersaveform.get('password').value;

  // this.user.email = this.usersaveform.get('email').value;

  // this.user.contact = this.usersaveform.get('contact').value;

  // console.log(this.user.contact);

  //this.user.userType = this.usersaveform.get('userType').value;

  //this.user.confirmed = this.usersaveform.get('confirmed').value;

  //console.log(this.user.confirmed);

  this.submitted = true;

  this.userservice.findByUserNameAndPassword(this.user.userName, this.user.password).subscribe(data =>{

  this.userNew=data;

  if(this.userNew!=null && this.userNew.userType=='admin'){

   this.router.navigate(['admin']);

  }

  else if(this.userNew!=null && this.userNew.userType=='user'){

   this.router.navigate(['user']);

  }

   // this.router.navigate(['loginpage']);
   else{
     alert("invalid details");
   }



 },

   error => console.log(console.error()));

 }




}
