import { Component, OnInit } from '@angular/core';

import {LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Navigation',
      url: './navigation/',
      icon: 'compass'
    },
    {
      title: 'Trips',
      url: './trips/',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: './favourites/',
      icon: 'heart'
    },
    {
      title: 'Profile',
      url: './profile',
      icon: 'person'
    },
    {
      title: 'Settings',
      url: './settings',
      icon: 'settings'
    },
    {
      title: 'Help',
      url: './help',
      icon: 'warning'
    }
  ];
  public labels = ['Galway', 'Cork', 'etc'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private databaseService: DatabaseService,
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
  }
  async initializeApp() {
    this.platform.ready().then(async () => {
      const loading = await this.loadingCtrl.create();
      await loading.present();
      this.databaseService.init();
      this.databaseService.dbReady.subscribe(isReady => {
        if (isReady) {
          loading.dismiss();
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        }
      });
    });
  }
 /* initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }*/

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
