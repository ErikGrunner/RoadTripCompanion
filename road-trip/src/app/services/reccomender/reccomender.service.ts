import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend} from '@angular/common/http';

import { Observable } from  'rxjs';
import { BehaviorSubject } from "rxjs";
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReccomenderService {
  baseUrl:string = "http://localhost:8000/";
  places: Observable<any>;
  constructor(public http: HttpClient) {
    console.log('Json REtrieval setup');
    
}
getRemoteData(){

  return this.http.get(this.baseUrl +'index?place=Kruithuis').pipe(map(res => res));
 /* this.places =
  this.http.get(this.baseUrl +'index?place=Kruithuis');
    this.places
    .subscribe(data => {
      console.log('my data: ', data);})
 // this.http
  //.get( this.baseUrl +'index?place=Kruithuis').pipe(map(res => res))
  //.subscribe(data =>{ console.log(data);});
  
  */
}
}

