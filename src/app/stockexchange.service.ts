import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockexchange } from './stockexchange';



@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {

  private baseUrl = 'http://localhost:8035/stockexchange'; 

  constructor(private http:HttpClient) { }
  


  getAllstockexchange(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllstockexchange');  
  }  

  saveStockexchange(stockexchange:Stockexchange): Observable<Stockexchange> {  
    return this.http.post<Stockexchange>(this.baseUrl+'/savestockexchange',stockexchange);  
  }  

  updateStockexchange(id:number, value:Stockexchange):Observable<object>{
    return this.http.put<Stockexchange>(this.baseUrl+'/updateStockexchange/{id}',id);
  }
  
  find(id:number):Observable<Stockexchange>{
  
    return this.http.get<Stockexchange>(this.baseUrl+'/find/'+id);
  
   }
  delete(id:number):Observable<object>{
   
    return this.http.delete<Stockexchange>(this.baseUrl+'/delete/'+id);
  
    }
  
  
  






}
