import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any = {};
  constructor(
    private auth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private afDB: AngularFireDatabase,
  ) { }


  ngOnInit() {
    /*console.log(this.auth.currentUser.then((user) => {
      return user.uid
    }).then((result) => {
      return result;
    }).then((res)=>{console.log(res)}));*/

    this.auth.currentUser.then((user) => {
      return user.uid
    }).then((uid) => {

    this.afDB.object('users/' + uid).snapshotChanges().subscribe((usersnap: any) => {
      this.user = { 'key': usersnap.key, ...usersnap.payload.val() }
    })

  })


  }


  upload() {
    let file = document.getElementById("avatar").files[0];
    let ref = this.afStorage.ref('upload/' + this.auth.currentUser + '/' + file.name);

    ref.put(file).then(res => {

      ref.getDownloadURL().subscribe(url => {

        this.user.imgURL = url;

      });

    }).catch(e => {
      console.log(e);
    })

  }

  update() {
    this.auth.currentUser.then((user) => {
      return user.uid
    }).then((uid) => {
    this.afDB.object('users/' + uid).update(this.user)
  }
  )}

}
