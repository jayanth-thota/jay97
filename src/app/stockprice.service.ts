import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private baseUrl = 'http://localhost:8035/stockprice'; 

  constructor(private http:HttpClient) { }


  getAllstockprice(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllstockprice');  
  }  


  saveStockprice(stockprice:Stockprice): Observable<Stockprice> {  
    return this.http.post<Stockprice>(this.baseUrl+'/savestockprice',stockprice);  
  }  

  updateStockPrice(companycode:String, value:Stockprice):Observable<object>{
    return this.http.put<Stockprice>(this.baseUrl+'/updatestockprice/{companycode}',companycode);
  }
  
  find(companycode:String):Observable<Stockprice>{
  
    return this.http.get<Stockprice>(this.baseUrl+'/find/'+companycode);
  
   }
  

  deleteStockPrice(companyCode:String):Observable<object>{

   return this.http.delete<Stockprice>(this.baseUrl+'/deletestockprice/'+companyCode);
  
    }





}
