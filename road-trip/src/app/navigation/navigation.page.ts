import { Component, OnInit } from '@angular/core';
import { MapBoxComponent} from 'src/app/map/map-box/map-box.component'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  constructor() { }
  ngOnInit(): void {
    MapBoxComponent.ionViewDidEnter();
    //this.ionViewDidEnter();
  }


}