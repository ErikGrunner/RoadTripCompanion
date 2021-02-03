import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  feature = null;
  features = [];
  export = null;
  newFeature = 'new feature';

  constructor(private route: ActivatedRoute, private databaseService: DatabaseService) { }
  /*ngOnInit(): void {
    throw new Error('Method not implemented.');
  }*/

  async ngOnInit(): Promise<void> {
    this.databaseService.deleteDatabase();
    this.databaseService.getFeatureList().subscribe(res => {
      this.features = res.values;
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.databaseService.addDummyFeature("poop");
    //console.log(this.feature = await this.databaseService.getFeatureList().subscribe(res=>this.features=res,res =>{ console.log(res);}));
    
    //this.feature = await this.databaseService.getFeatureById(id);
  }
  loadFeatures() {
    this.databaseService.getFeatureList().subscribe(res => {
      this.features = res.values;
    });
  }
 
  // Mode is either "partial" or "full"
  async createExport(mode) {
    const dataExport = await this.databaseService.getDatabaseExport(mode);
    this.export = dataExport.export;
  }
 
  async addFeature() {
    await this.databaseService.addDummyFeature(this.newFeature);
    this.newFeature = '';
    this.loadFeatures();
  }
 
  async deleteFeature(feature) {    
    await this.databaseService.deleteFeature(feature.id);
    this.features = this.features.filter(p => p != feature);    
  }
 
  // For testing..
  deleteDatabase() {
    this.databaseService.deleteDatabase();
  }
}

  