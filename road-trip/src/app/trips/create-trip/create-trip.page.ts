import { Component, OnInit } from '@angular/core';
import { ReccomenderService } from '../../services/reccomender/reccomender.service';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})

export class CreateTripPage implements OnInit {
  places: Observable<any>
  private title: string;

  constructor( public ReccomenderService: ReccomenderService ) {
    //console.log(this.ReccomenderService.getRemoteData());
    //this.ReccomenderService.getRemoteData().pipe(map(res => res.json));
    //this.places.subscribe(data =>{ console.log(data);}) //this.title = data.operationalLayers[0].featureCollection.layers[0].featureSet.features[0].attributes.title})
    //this.placeArry.push(this.ReccomenderService.getRemoteData(););
    this.ReccomenderService.getRemoteData().subscribe(res=>this.places=res,res =>{ console.log(res);});
  }
  

  ngOnInit() {
  }
  ionViewDidLoad(){
    
  }
  
}
