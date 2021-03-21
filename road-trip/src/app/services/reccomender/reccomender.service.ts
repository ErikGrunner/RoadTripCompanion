import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend} from '@angular/common/http';

import { Observable } from  'rxjs';
import { BehaviorSubject } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import {AngularFireDatabase} from'@angular/fire/database'
import { AngularFirestore} from'@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class ReccomenderService {
  baseUrl:string = "http://localhost:8000/";
  places: any;
  items = [];
  

  constructor(public http: HttpClient,private fireS:AngularFirestore) {
    
    console.log('Json REtrieval setup');
    
}
getProfileRecs(type){
  return this.http.get(this.baseUrl +'recommendMulti?type=' + type).toPromise().then(res => res);
}
getRemoteData(place){
    //place = JSON.stringify(place)
    
    return this.http.get(this.baseUrl +'recommend?place='+ place).toPromise().then(res => res);
    //return this.http.get(this.baseUrl +'recommend?place='+ place).pipe(map(res => res));
  //return this.http.get(this.baseUrl +'index?place=Kruithuis').pipe(map(res => res));
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
getCoords(place){
  //console.log(this.ReccomenderService.getCoords(value.detail.value).subscribe(res=>this.coords=res,res =>{ console.log(res);}));
  //this.http.get(this.baseUrl +'feature?place='+ place).pipe(map(res => res)).subscribe(res=>this.places=res,res =>{ console.log(res);});
  //this.places = this.http.get(this.baseUrl +'feature?place='+ place).pipe(map(res => res)).subscribe((res)=>this.places=res,res =>{ console.log('--- result :: ',res);})
  //this.places=this.http.get(this.baseUrl +'feature?place='+ place).toPromise().then(res=>this.places=res,res => console.log('--- result :: ',res))

  this.http.get(this.baseUrl +'feature?place='+ place).toPromise().then(data => {
    console.log(data[0]);
    this.fireS.collection('features/')
  //.add(Object.apply(data[0]))
  .add({
    accessibility: data[0].accessibility,
    address: data[0].address,
    alt: data[0].alt,
    article: data[0].article,
    checkIn: data[0].checkIn,
    checkOut: data[0].checkOut,
    description: data[0].description,
    directions: data[0].directions,
    email: data[0].email,
    fax: data[0].fax,
    hours: data[0].hours,
    image: data[0].image,
    lastEdit: data[0].lastEdit,
    latitude: data[0].latitude,
    longitude: data[0].longitude,
    phone: data[0].phone,
    price: data[0].price,
    title: data[0].title,
    tollFree: data[0].tollFree,
    type: data[0].type,
    url: data[0].url,
    wifi: data[0].wifi,
    wikidata: data[0].wikidata,
    wikipedia: data[0].wikipedia,
  })
  });
  //console.log("before firestore")
  //this.fireS.collection('features/')
  //.add(data)
  //this.fireS.collection('features').add(this.places)
  
  return this.http.get(this.baseUrl +'feature?place='+ place).pipe(map(res => res));
}



}

