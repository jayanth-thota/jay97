import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../sectors.service';
import { Observable } from 'rxjs';
import { Sectors } from '../sectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorslist',
  templateUrl: './sectorslist.component.html',
  styleUrls: ['./sectorslist.component.css']
})
export class SectorslistComponent implements OnInit {

  constructor(private router:Router, private sectorsservice:SectorsService) { }
  sectorslist:Observable<any[]>;

  ngOnInit() {
    this.sectorsservice.getAllsectors().subscribe(data=>{
      this.sectorslist=data;
    })
  }

  deletesectors(sectors:Sectors)

{

 this.sectorsservice.deletesectors(sectors.id).subscribe(data=>{

 this.sectorsservice.getAllsectors().subscribe(data=>{this.sectorslist=data;});



 });
  }
  updateSectors(sectors : Sectors){
    window.localStorage.removeItem("edit-id")
    window.localStorage.setItem("edit-id",sectors.id.toString());
    this.router.navigate(['createsectors']);
  }


}
