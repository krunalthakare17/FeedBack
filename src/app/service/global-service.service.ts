import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class GlobalServiceService {
  webapi = "http://localhost:34300/"; 
  constructor(private http: HttpClient) { }
  //post methode call
  POSTRecord(AddForm: any,urlparametr:any): Observable<any> {  // call post service
    return this.http.post<any>(this.webapi + urlparametr, AddForm, httpOptions).pipe();
  }
  //get methode call
  GETRecord(url:any):Observable<any>
  {
   return this.http.get<any>(this.webapi + url)
  }

}

