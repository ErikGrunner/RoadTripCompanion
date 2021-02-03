import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import '@capacitor-community/sqlite';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
import { JsonSQLite } from '@capacitor-community/sqlite';
const { CapacitorSQLite, Device, Storage } = Plugins;
 
const DB_SETUP_KEY = 'feature_db_setup';
const DB_NAME_KEY = 'feature_db';
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  dbReady = new BehaviorSubject(false);
  dbName = '';
 
  constructor(private http: HttpClient, private alertCtrl: AlertController) { }
 
  async init(): Promise<void> {
    const info = await Device.getInfo();
 
    if (info.platform === 'android') {
      try {
        const sqlite = CapacitorSQLite as any;
        await sqlite.requestPermissions();
        this.setupDatabase();
      } catch (e) {
        const alert = await this.alertCtrl.create({
          header: 'No DB access',
          message: 'This app can\'t work without Database access.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      console.log("setup")
      this.setupDatabase();
      console.log("setup complete")
    }
  }
 
  private async setupDatabase() {
    const dbSetupDone = await Storage.get({ key: DB_SETUP_KEY });
    this.downloadDatabase();
    if (!dbSetupDone.value) {
      this.downloadDatabase();
    } else {
      this.dbName = (await Storage.get({ key: DB_NAME_KEY })).value;
      await CapacitorSQLite.open({ database: this.dbName });
      this.dbReady.next(true);
    }
  }
 
  // Potentially build this out to an update logic:
  // Sync your data on every app start and update the device DB
  private downloadDatabase(update = false) {
    this.http.get('file://E:/Documents/GitHub/RoadTrip/dbc.json').subscribe(async (jsonExport: JsonSQLite) => {
    //  this.http.get('https://devdactic.fra1.digitaloceanspaces.com/tutorial/db.json').subscribe(async (jsonExport: JsonSQLite) => {

      const jsonstring = JSON.stringify(jsonExport);
      const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });
      console.log("testhere21")
      /*if (isValid.result)*/ {
        console.log("testhere22")
        this.dbName = jsonExport.database;
        await Storage.set({ key: DB_NAME_KEY, value: this.dbName });
        await CapacitorSQLite.importFromJson({ jsonstring });
        await Storage.set({ key: DB_SETUP_KEY, value: '1' });
        console.log("testhere23")
        // Your potential logic to detect offline changes later
        if (!update) {
          //await CapacitorSQLite.createSyncTable();
        } else {
          await CapacitorSQLite.setSyncDate({ syncdate: '' + new Date().getTime() })
        }
        this.dbReady.next(true);
      }
    });
  }

  getFeatureList() {
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = 'SELECT * FROM features;';
          console.log("testhere24")
          return from(CapacitorSQLite.query({ statement, values: [] }));
        }
      })
    )
  }
   
  async getFeatureById(id) {
    const statement = `SELECT * FROM features LEFT JOIN vendors ON vendors.id=features.vendorid WHERE features.id=${id} ;`;
    return (await CapacitorSQLite.query({ statement, values: [] })).values[0];
  }
   
  getDatabaseExport(mode) {
    return CapacitorSQLite.exportToJson({ jsonexportmode: mode });
  }
   
  addDummyFeature(name) {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    const randomVendor = Math.floor(Math.random() * 3) + 1
    const statement = `INSERT INTO features (name, currency, value, vendorid) VALUES ('${name}','EUR', ${randomValue}, ${randomVendor});`;
    return CapacitorSQLite.execute({ statements: statement });
  }
   
  deleteFeature(FeatureId) {
    const statement = `DELETE FROM features WHERE id = ${FeatureId};`;
    return CapacitorSQLite.execute({ statements: statement });
  }
   
  // For testing only..
  async deleteDatabase() {
    const dbName = await Storage.get({ key: DB_NAME_KEY });
    await Storage.set({ key: DB_SETUP_KEY, value: null });
    return CapacitorSQLite.deleteDatabase({ database: dbName.value });
  }
}