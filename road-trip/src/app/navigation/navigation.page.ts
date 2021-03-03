import { Component, OnInit } from '@angular/core';
import { MapBoxComponent} from 'src/app/map/map-box/map-box.component'
import { ReccomenderService } from '../services/reccomender/reccomender.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { title } from 'process';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  places: Observable<any>
  coords: Observable<any>


  constructor(public MapBox : MapBoxComponent,public ReccomenderService: ReccomenderService) { }
  ngOnInit(): void {
    var aArray= []

    var aArrayLong= []
    var aArrayLat= []
    //console.log(this.ReccomenderService.getRemoteData('Kruithuis').subscribe(res=>this.places=res,res =>{ console.log(res);}));
    this.ReccomenderService.getRemoteData('Kruithuis').then(res=>this.places=res,data => console.log(data))
    //console.log(this.ReccomenderService.getRemoteData('Kruithuis').then(data => console.log(data)));
    var i
    console.log(this.ReccomenderService.getRemoteData('Kruithuis').then(data => {
      console.log(data[0]);
      for(i = 0;i<10;i++)
      {
      aArray[i] = data[i].title
      aArrayLong[i] ="" + data[i].longitude
      aArrayLat[i] = "" + data[i].latitude
      //console.log(aArray[i])
    }
    //console.log(this.ReccomenderService.getCoords('Aalborg Townhall').subscribe(res=>this.coords=res,res =>{ console.log(res);}));
    //console.log(this.ReccomenderService.getCoords('Aalborg Townhall').then(res=>this.coords=res,data => console.log(data)))
    this.MapBox.buildMap(aArray,aArrayLong,aArrayLat)
  }))

  }

}