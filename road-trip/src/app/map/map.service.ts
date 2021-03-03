import { Component, OnInit, ChangeDetectorRef ,Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
     //mapboxgl.accessToken  = environment.mapbox.accessToken
  }

  getMarkers(): AngularFireList<any> {
    return this.db.list('/markers')
  }

  createMarker(data: GeoJson) {

    
    return this.db.list('/markers')
                  .push(data)
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove()
  }

}