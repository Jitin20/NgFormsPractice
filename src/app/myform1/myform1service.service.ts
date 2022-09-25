import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Imyform1 } from '../imyform1';

@Injectable({
  providedIn: 'root'
})
export class Myform1serviceService {

  postmyform1(myform1:Imyform1):Observable<any>{
     return this.http.post('https://putsreq.com/lgxDV99SYuEW0BQ4VY7M', myform1)
  }
  constructor(private http: HttpClient) { }
}
