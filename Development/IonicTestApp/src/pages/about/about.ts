import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

import { NavController, NavParams } from 'ionic-angular';
import { User} from "../../app/app.component";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  destination:string;
  start:string;
  userArray: {vorname: string, nachname: string, icon: string};
  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator ) {
    // If we navigated to this page, we will have an item available as a nav param

    let userObject = this.navParams.get('user');
    if (userObject != null) {
      this.userArray = {
        vorname: userObject.vorname,
        nachname: userObject.nachname,
        icon: userObject.icon
      };
    }
    this.start = "";
    this.destination = "Westminster, London, UK";

    
  }
  openFilters() {
    let options: LaunchNavigatorOptions = {
      start: this.start
    };

    this.launchNavigator.navigate(this.destination, options)
        .then(
            success => alert('Launched navigator'),
            error => alert('Error launching navigator: ' + error)
    );
}

}
