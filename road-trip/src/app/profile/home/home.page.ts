import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: any = [];


  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private afFirestore: AngularFirestoreModule,
    private alertCtrl: AlertController
  ) { }


  add() {
    this.alertCtrl.create({
      message: "task",
      inputs: [
        { type: 'text', name: 'title' },
        { type: 'textarea', name: 'desc' }
      ],
      buttons: [
        {
          text: 'Add', handler: (res) => {
            console.log(res);

            this.afFirestore.collection(this.auth.auth.currentUser.uid).add({
              title: res.title,
              desc: res.desc,
              createdAt: Date.now(),
              isDone: false
            });

          }
        }, {
          text: 'Cancel'
        }
      ]
    }).then(a => a.present());
  }


  fetch() {
    this.afFirestore.collection(this.auth.auth.currentUser.uid).snapshotChanges().subscribe((res: any) => {
      console.log(res);
      let tmp = [];
      res.forEach(task => {
        tmp.push({ key: task.payload.doc.id, ...task.payload.doc.data() });
      })
      console.log(tmp);
      this.tasks = tmp;
    })
  }


  update(id, isDone) {
    this.afFirestore.collection(this.auth.auth.currentUser.uid).doc(id).update({
      isDone: !isDone
    });
  }

  delete(id) {
    this.afFirestore.collection(this.auth.auth.currentUser.uid).doc(id).delete();
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/profile');
    }).catch(e => {
      console.log(e);
    })
  }

}
