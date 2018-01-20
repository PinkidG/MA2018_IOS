import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { User} from "../../app/app.component";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  userArray: {vorname: string, nachname: string, icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    let userObject = this.navParams.get('user');
    if (userObject != null) {
      this.userArray = {
        vorname: userObject.vorname,
        nachname: userObject.nachname,
        icon: userObject.icon
      };
    }

  }

  ionViewWillEnter(){

  }
}
