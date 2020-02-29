import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Stockexchange } from '../stockexchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstockexchange',
  templateUrl: './createstockexchange.component.html',
  styleUrls: ['./createstockexchange.component.css']
})
export class CreatestockexchangeComponent implements OnInit {

  constructor(private router: Router,private stockexchangeservice:StockexchangeService) { }
  stockexchange :Stockexchange=new Stockexchange();
  submitted = false;

  ngOnInit() {
    var stockexchangeid = window.localStorage.getItem("edit-id");



    if (stockexchangeid != null && stockexchangeid != "") {

      //this.message = "Update Recored";



      this.stockexchangeservice.find(parseInt(stockexchangeid))



        .subscribe(data => {

          this.stockexchange = data; this.stockexchangesaveform.setValue(this.stockexchange)


        });



    }

    this.submitted=false;
  }
  stockexchangesaveform=new FormGroup({

    id:new FormControl('',[Validators.required, Validators.maxLength(5)]),
  
    stockExchange:new FormControl('',[Validators.required, Validators.minLength(5)]),
  
    brief:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),

    contactAddress:new FormControl('',[Validators.required, Validators.minLength(5)]),

    remarks:new FormControl('',[Validators.required, Validators.minLength(5)])
  })


  saveStockexchange(saveStockexchange){
  
    this.stockexchange=new Stockexchange();
  
    this.stockexchange.id=this.stockexchangesaveform.get('id').value;
  
    //console.log(this.user.id);
  
    this.stockexchange.stockExchange=this.stockexchangesaveform.get('stockExchange').value;
  
    this.stockexchange.brief=this.stockexchangesaveform.get('brief').value;
  
    this.stockexchange.contactAddress=this.stockexchangesaveform.get('contactAddress').value;

    this.stockexchange.remarks=this.stockexchangesaveform.get('remarks').value;

    
  
  
    this.submitted=true;
  
    this.save();
  
   }
  
   save(){
  
    this.stockexchangeservice.saveStockexchange(this.stockexchange).subscribe(data=>console.log(data), error=>console.log(console.error()));
  
    this.stockexchange=new Stockexchange();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['homepage']);
  
   }
   stockexchangesaveForm()
{
  this.submitted=false;
  this.stockexchangesaveform.reset();
}

  
  
  
  
    

}
