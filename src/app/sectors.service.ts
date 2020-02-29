import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sectors } from './sectors';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  
  private baseUrl = 'http://localhost:8035/sectors'; 

  constructor(private http:HttpClient) { }


  getAllsectors(): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'/getAllsectors');  
  }  

  saveSectors(sectors:Sectors): Observable<Sectors> {  
    return this.http.post<Sectors>(this.baseUrl+'/savesectors',sectors);  
  }  

  updateSectors(id:number, value:Sectors):Observable<object>{
    return this.http.put<Sectors>(this.baseUrl+'/updatesectors/{id}',id);
  }
  
  find(id:number):Observable<Sectors>{
  
    return this.http.get<Sectors>(this.baseUrl+'/find/'+id);
  
   }

  deletesectors(id:number):Observable<object>{
  return this.http.delete<Sectors>(this.baseUrl+'/deletesectors/'+id);
  
    }




}
