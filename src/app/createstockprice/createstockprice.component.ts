import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstockprice',
  templateUrl: './createstockprice.component.html',
  styleUrls: ['./createstockprice.component.css']
})
export class CreatestockpriceComponent implements OnInit {

  constructor(private router: Router,private stockpriceservice:StockpriceService) { }
  stockprice : Stockprice=new Stockprice();
  submitted = false;

  ngOnInit() {
    var stockpriceid = window.localStorage.getItem("edit-companyCode");



    if (stockpriceid != null && stockpriceid != "") {

      //this.message = "Update Recored";



      this.stockpriceservice.find(stockpriceid)



        .subscribe(data => {

          this.stockprice = data; this.stockpricesaveform.setValue(this.stockprice)


        });



    }
    this.submitted=false;
  }
  stockpricesaveform=new FormGroup({
   
   
    

    companyCode:new FormControl('',[Validators.required, Validators.maxLength(5)]),
  
    stockExchange:new FormControl('',[Validators.required, Validators.minLength(5)]),
  
    currentPrice:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),

    date:new FormControl('',[Validators.required]),

    
  })
  saveStockprice(saveStockprice){
  
    this.stockprice=new Stockprice();
  
    this.stockprice.companyCode=this.stockpricesaveform.get('companyCode').value;
  
    //console.log(this.user.id);
  
    this.stockprice.stockExchange=this.stockpricesaveform.get('stockExchange').value;
  
    this.stockprice.currentPrice=this.stockpricesaveform.get('currentPrice').value;
  
    this.stockprice.date=this.stockpricesaveform.get('date').value;
   
    this.submitted=true;
  
    this.save();
  
   }
  
   save(){
    // alert(this.stockprice);
  
    this.stockpriceservice.saveStockprice(this.stockprice).subscribe(data=>console.log(data), error=>console.log(console.error()));
  
    this.stockprice=new Stockprice();
    window.localStorage.removeItem("edit-companyCode");
    this.router.navigate(['homepage']);
  
   }
   stockpricesaveForm()
   {
     this.submitted=false;
     this.stockpricesaveform.reset();
   }
  
  
  
  
  

}
