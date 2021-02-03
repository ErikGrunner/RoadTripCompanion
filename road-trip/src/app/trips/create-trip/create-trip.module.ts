import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CreateTripPageRoutingModule } from './create-trip-routing.module';

import { CreateTripPage } from './create-trip.page';
import { ReccomenderService } from 'src/app/services/reccomender/reccomender.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    CreateTripPageRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [CreateTripPage],
  providers: [
    ReccomenderService
  ],
})
export class CreateTripPageModule {}
