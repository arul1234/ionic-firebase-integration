import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   items: Observable<any[]>;
   settings: Observable<any[]>;
   banners: Observable<any[]>;
  constructor( public db: AngularFireDatabase,
    public navCtrl: NavController) {

  this.items = db.list('home_page').valueChanges();
  this.settings = db.list('settings').valueChanges();
  this.banners = db.list('banner1').valueChanges();
  }

   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  };

}
