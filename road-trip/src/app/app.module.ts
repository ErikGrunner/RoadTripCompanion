import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReccomenderService } from './services/reccomender/reccomender.service';
import { HttpClientModule } from '@angular/common/http';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from'@angular/fire/auth'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from '../environments/environment';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
 





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ReccomenderService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
