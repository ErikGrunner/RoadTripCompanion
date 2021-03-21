import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { allowedNodeEnvironmentFlags } from 'process';
import { ReccomenderService } from 'src/app/services/reccomender/reccomender.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {
  
  constructor(private auth: AngularFireAuth,private fireS : AngularFirestore,public ReccomenderService: ReccomenderService) { }


  places: any = [];
  type:any ="all";
 


  ngOnInit() {
    this.ReccomenderService.getProfileRecs(this.type).then(res=>this.places=res,data => console.log(data))
/*
    var docRef = this.fireS.collection('features').doc('01eEKxnoAqiLJgAuUEYV')

    docRef.get().toPromise().then((doc) => {
      if (doc.exists) { 
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

  var docrRef = this.fireS.collection('features')
/*
  docrRef.get().toPromise().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        this.places = doc.data()
    });
});*/
/*
    this.fireS.collection('/feartures').snapshotChanges().subscribe((res: any) => {
      console.log(res);/*
      let tmp = [];
      res.forEach(task => {
        tmp.push({ key: task.payload.doc.id, ...task.payload.doc.data() });
      })
      console.log(tmp);
      this.places = tmp;
    })*/
  }

  radioGroupChange(value){
    console.log(value.detail.value)
    this.type = value.detail.value
    this.ReccomenderService.getProfileRecs(this.type).then(res=>this.places=res,data => console.log(data))
  }

public YesOption(){
  this.fireS.collection('featuresrec/')
          //.add(Object.apply(data[0]))
          .add({
            accessibility: this.places[0].accessibility,
            address: this.places[0].address,
            alt: this.places[0].alt,
            article: this.places[0].article,
            checkIn: this.places[0].checkIn,
            checkOut: this.places[0].checkOut,
            description: this.places[0].description,
            directions: this.places[0].directions,
            email: this.places[0].email,
            fax: this.places[0].fax,
            hours: this.places[0].hours,
            image: this.places[0].image,
            lastEdit: this.places[0].lastEdit,
            latitude: this.places[0].latitude,
            longitude: this.places[0].longitude,
            phone: this.places[0].phone,
            price: this.places[0].price,
            title: this.places[0].title,
            tollFree: this.places[0].tollFree,
            type: this.places[0].type,
            url: this.places[0].url,
            wifi: this.places[0].wifi,
            wikidata: this.places[0].wikidata,
            wikipedia: this.places[0].wikipedia,})

  this.ReccomenderService.getProfileRecs(this.type).then(res=>this.places=res,data => console.log(data))
}
public NoOption(){
  this.fireS.collection('dislikes/')
          //.add(Object.apply(data[0]))
          .add({
            accessibility: this.places[0].accessibility,
            address: this.places[0].address,
            alt: this.places[0].alt,
            article: this.places[0].article,
            checkIn: this.places[0].checkIn,
            checkOut: this.places[0].checkOut,
            description: this.places[0].description,
            directions: this.places[0].directions,
            email: this.places[0].email,
            fax: this.places[0].fax,
            hours: this.places[0].hours,
            image: this.places[0].image,
            lastEdit: this.places[0].lastEdit,
            latitude: this.places[0].latitude,
            longitude: this.places[0].longitude,
            phone: this.places[0].phone,
            price: this.places[0].price,
            title: this.places[0].title,
            tollFree: this.places[0].tollFree,
            type: this.places[0].type,
            url: this.places[0].url,
            wifi: this.places[0].wifi,
            wikidata: this.places[0].wikidata,
            wikipedia: this.places[0].wikipedia,})

  this.ReccomenderService.getProfileRecs(this.type).then(res=>this.places=res,data => console.log(data))
}
Update()
{
  this.auth.currentUser.then((user) => {
    return user.uid
  }).then((uid) => {
  this.fireS.collection
}
)}
}

