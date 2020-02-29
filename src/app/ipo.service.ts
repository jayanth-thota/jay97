
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from './ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  private baseUrl = 'http://localhost:8035/ipo'; 



  constructor(private http:HttpClient) { }
  getAllipo(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllipo');  
  } 

  saveipo(ipo:Ipo): Observable<Ipo> {  
    return this.http.post<Ipo>(this.baseUrl+'/saveipo',ipo);  
  }  


updateIpo(id:number, value:Ipo):Observable<object>{
  return this.http.put<Ipo>(this.baseUrl+'/updateipo/{id}',id);
}

find(id:number):Observable<Ipo>{

  return this.http.get<Ipo>(this.baseUrl+'/find/'+id);

 }



  deleteIpo(id:number):Observable<object>{
    return this.http.delete<Ipo>(this.baseUrl+'/deleteIpo/'+id);
    
      }








}
