import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }


  userlist:Observable<any[]>;

  ngOnInit() {
    this.userservice.getAllusers().subscribe(data=>{
      this.userlist=data;
    })
  }
  delete(user:User)
{
 
 
this.userservice.delete(user.id).subscribe(data=>{
 
 
this.userservice.getAllusers().subscribe(data=>{this.userlist=data;});
 
 
 
  });
 
  }
  updateUser(user : User){
    window.localStorage.removeItem("edit-id")
    window.localStorage.setItem("edit-id",user.id.toString());
    this.router.navigate(['registration']);
  }
  
  
  
 
 

}
