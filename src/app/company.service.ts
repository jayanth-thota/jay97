import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from} from 'rxjs';  
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8035/companyrelated'; 

  constructor(private http:HttpClient) { }

  getAllcompanies(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllcompanies');  
  } 
 
  saveCompany(companyrelated:Company):Observable<Company>{

    return this.http.post<Company>(this.baseUrl+'/savecompany',companyrelated);
  
   }
  
  
  updateCompany(id:number, value:Company):Observable<object>{
    return this.http.put<Company>(this.baseUrl+'/updatecompany/id',id);
  }
  
  find(id:number):Observable<Company>{
  
    return this.http.get<Company>(this.baseUrl+'/find/'+id);
  
   }

  deletecompany(id:number):Observable<object>{
    return this.http.delete<Company>(this.baseUrl+'/deletecompany/'+id);
    
      }




}
