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
getRemoteData(place){
  //place = JSON.stringify(place)
  
  return this.http.get(this.baseUrl +'index?place='+ place).pipe(map(res => res));
 
}
getCoords(place){
  return this.http.get(this.baseUrl +'coords?place='+ place).pipe(map(res => res));
}
}

