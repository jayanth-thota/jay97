import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  constructor(private router:Router,private companyservice:CompanyService) { }
  companylist:Observable<any[]>;

  ngOnInit() {
    this.companyservice.getAllcompanies().subscribe(data=>{
      this.companylist=data;
    })
  }
  deletecompany(company:Company)

  { this.companyservice.deletecompany(company.id).subscribe(data=>{
  
   this.companyservice.getAllcompanies().subscribe(data=>{this.companylist=data;});
  
  
  
   });
    }
    updateCompany(company : Company){
      window.localStorage.removeItem("edit-id")
      window.localStorage.setItem("edit-id",company.id.toString());
      this.router.navigate(['createcompany']);
    }

}
