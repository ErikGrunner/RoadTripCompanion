import { Component, OnInit } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(public router:Router) { }
  gotoCreateTrip() {
    this.router.navigateByUrl('create-trip');
  }
  ngOnInit() {
  }

}
