import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any = {};

  constructor(
    private authObj: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {

    if (this.user.email && this.user.password) {
      this.authObj.signInWithEmailAndPassword(this.user.email, this.user.password).then((res) => {
        console.log(res);

        this.router.navigateByUrl('/profile/home');


      }).catch(e => {
        console.log(e);
      })
      
    }
  }
}
