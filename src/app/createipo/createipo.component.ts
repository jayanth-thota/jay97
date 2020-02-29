

import { Component, OnInit } from '@angular/core';
import { IpoService } from '../ipo.service';
import { Ipo } from '../ipo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createipo',
  templateUrl: './createipo.component.html',
  styleUrls: ['./createipo.component.css']
})
export class CreateipoComponent implements OnInit {


  constructor(private router: Router, private iposervice: IpoService) { }
  ipo: Ipo = new Ipo();
  submitted = false;


  ngOnInit() {
    var ipoid = window.localStorage.getItem("edit-id");



    if (ipoid != null && ipoid != "") {

      //this.message = "Update Recored";



      this.iposervice.find(parseInt(ipoid))



        .subscribe(data => {

          this.ipo = data; this.iposaveform.setValue(this.ipo)


        });



    }
    this.submitted = false;
  }


  iposaveform = new FormGroup({

    id: new FormControl('', [Validators.required, Validators.maxLength(5)]),

    companyName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    stockExchange: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),

    pricePerShare: new FormControl('', [Validators.required]),

    totalNoOfShares: new FormControl('', [Validators.required]),

    openDateTime: new FormControl('', [Validators.required]),

    remarks: new FormControl('', [Validators.required]),



  })

  saveIpo(saveipo) {

    this.ipo = new Ipo();

    this.ipo.id = this.iposaveform.get('id').value;

    //console.log(this.user.id);

    this.ipo.companyName = this.iposaveform.get('companyName').value;

    this.ipo.stockExchange = this.iposaveform.get('stockExchange').value;

    this.ipo.pricePerShare = this.iposaveform.get('pricePerShare').value;

    this.ipo.totalNoOfShares = this.iposaveform.get('totalNoOfShares').value;

    // console.log(this.user.contact);

    this.ipo.openDateTime = this.iposaveform.get('openDateTime').value;

    this.ipo.remarks = this.iposaveform.get('remarks').value;



    this.submitted = true;

    this.save();

  }

  save() {

    this.iposervice.saveipo(this.ipo).subscribe(data => console.log(data), error => console.log(console.error()));

    this.ipo = new Ipo();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['homepage'])

  }
iposaveForm()
{
  this.submitted=false;
  this.iposaveform.reset();
}

}
