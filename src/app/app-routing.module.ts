import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { IpolistComponent } from './ipolist/ipolist.component';
import { CreateipoComponent } from './createipo/createipo.component';
import { CreatesectorsComponent } from './createsectors/createsectors.component';
import { SectorslistComponent } from './sectorslist/sectorslist.component';
import { CreatestockexchangeComponent } from './createstockexchange/createstockexchange.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { CreatestockpriceComponent } from './createstockprice/createstockprice.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';







const routes: Routes = [
  {path:" ",component:HomepageComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"loginpage",component:LoginpageComponent },
  {path:"userlist",component: UserlistComponent },
  {path:"createcompany",component: CreatecompanyComponent },
  {path:"companylist",component: CompanylistComponent },
  {path:"ipolist",component: IpolistComponent },
  {path:"createipo",component: CreateipoComponent},
  {path:"createsectors",component: CreatesectorsComponent},
  {path:"sectorslist",component: SectorslistComponent},
  {path:"createstockexchange",component: CreatestockexchangeComponent},
  {path:"stockexchangelist",component:StockexchangelistComponent},
  {path:"stockpricelist",component:StockpricelistComponent},
  {path:"createstockprice",component:CreatestockpriceComponent},
  {path:"user",component:UserComponent},
  {path:"admin",component:AdminComponent },
  {path:"comparecompany",component:ComparecompanyComponent }









 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
