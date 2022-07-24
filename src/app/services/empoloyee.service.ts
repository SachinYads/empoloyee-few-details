import { Injectable } from '@angular/core';
import {empoloyeei} from'src/app/empoloyeeinterface';
import { Observable,of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption={
  headers:new HttpHeaders({'content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class EmpoloyeService {
  private apiUrl="http://localhost:3000/empoloyee";

  constructor(private http:HttpClient) { }
  getdata():Observable<empoloyeei [] >{
    return this.http.get<empoloyeei[]>(this.apiUrl);
  }
  deleteTask(data:empoloyeei):Observable<empoloyeei>{
    const url=  `${this.apiUrl}/${data.id}`
    return this.http.delete<empoloyeei>(url);
  }
  addEmpoloyeeService(newEmpoloyee:empoloyeei):Observable<empoloyeei>{
    return this.http.post<empoloyeei>(this.apiUrl,newEmpoloyee,httpOption)
  }
}
