import { Component, OnInit } from '@angular/core';
import { ReccomenderService } from '../../services/reccomender/reccomender.service';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { map, catchError } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {
  places: Observable<any>
  coords: Observable<any>
  private title: string;
  isSubmitted = false;
  ionicForm: FormGroup;

  constructor( public ReccomenderService: ReccomenderService, public formBuilder: FormBuilder) {
    //console.log(this.ReccomenderService.getRemoteData());
    //this.ReccomenderService.getRemoteData().pipe(map(res => res.json));
    //this.places.subscribe(data =>{ console.log(data);}) //this.title = data.operationalLayers[0].featureCollection.layers[0].featureSet.features[0].attributes.title})
    //this.placeArry.push(this.ReccomenderService.getRemoteData(););
    //this.ReccomenderService.getRemoteData().subscribe(res=>this.places=res,res =>{ console.log(res);});
    //this.ReccomenderService.getRemoteData('Kruithuis').subscribe(res=>this.places=res,res =>{ console.log(res);});
    this.ionicForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(2)]],
    })
  }
  
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.get('search').value)
    console.log(this.ReccomenderService.getRemoteData(this.ionicForm.get('search').value).subscribe(res=>this.places=res,res =>{ console.log(res);}));
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  radioGroupChange(value){
    console.log(value)
    console.log(value.detail.value)
    console.log(this.ReccomenderService.getCoords(value.detail.value).subscribe(res=>this.coords=res,res =>{ console.log(res);}));
    //console.log(this.ReccomenderService.getCoords(value.detail.value));
  }
  ngOnInit() {
    
  }
  ionViewDidLoad(){
  }
}