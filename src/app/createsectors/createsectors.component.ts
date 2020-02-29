import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../sectors.service';
import { Sectors } from '../sectors';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsectors',
  templateUrl: './createsectors.component.html',
  styleUrls: ['./createsectors.component.css']
})
export class CreatesectorsComponent implements OnInit {

  constructor(private router: Router,private sectorsservice:SectorsService) { }

  sectors : Sectors=new Sectors();
  submitted = false;

  ngOnInit() {
    var sectorsid = window.localStorage.getItem("edit-id");



    if (sectorsid != null && sectorsid != "") {

      //this.message = "Update Recored";



      this.sectorsservice.find(parseInt(sectorsid))



        .subscribe(data => {

          this.sectors = data; this.sectorssaveform.setValue(this.sectors)


        });



    }


    this.submitted=false;
  }
  sectorssaveform=new FormGroup({

    id:new FormControl('',[Validators.required, Validators.maxLength(5)]),
  
    sectorName:new FormControl('',[Validators.required, Validators.minLength(5)]),
  
    brief:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
  
    
   })
  
    saveSectors(savesectors){
  
    this.sectors=new Sectors();
  
    this.sectors.id=this.sectorssaveform.get('id').value;
  
    //console.log(this.user.id);
  
    this.sectors.sectorName=this.sectorssaveform.get('sectorName').value;
  
    this.sectors.brief=this.sectorssaveform.get('brief').value;
  
  
    this.submitted=true;
  
    this.save();
  
   }
  
   save(){
  
    this.sectorsservice.saveSectors(this.sectors).subscribe(data=>console.log(data), error=>console.log(console.error()));
  
    this.sectors=new Sectors();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['homepage'])
  
   }
   sectorssaveForm()
{
  this.submitted=false;
  this.sectorssaveform.reset();
}


}
