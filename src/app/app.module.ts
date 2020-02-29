import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CreateipoComponent } from './createipo/createipo.component';
import { IpolistComponent } from './ipolist/ipolist.component';
import { CreatesectorsComponent } from './createsectors/createsectors.component';
import { SectorslistComponent } from './sectorslist/sectorslist.component';
import { CreatestockexchangeComponent } from './createstockexchange/createstockexchange.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { CreatestockpriceComponent } from './createstockprice/createstockprice.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';  

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    LoginpageComponent,
    UserlistComponent,
    CreatecompanyComponent,
    CompanylistComponent,
    CreateipoComponent,
    IpolistComponent,
    CreatesectorsComponent,
    SectorslistComponent,
    CreatestockexchangeComponent,
    StockexchangelistComponent,
    CreatestockpriceComponent,
    StockpricelistComponent,
    UserComponent,
    AdminComponent,
    ComparecompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
