import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { User} from "../../app/app.component";
import { Instagram } from '@ionic-native/instagram';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  destination:string;
  start:string;
  currentImage = null;

  userArray: {vorname: string, nachname: string, icon: string};
  constructor(public navCtrl: NavController,public platform: Platform, private camera: Camera, private instagram: Instagram, public navParams: NavParams, private launchNavigator: LaunchNavigator ) {
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
    
    this.platform.ready().then(() =>{

      console.log("Ready"); 
      var modus = window["modusechoswift"];
      modus.echo(
        'Plugin Ready!', 
        function(msg) { 
          console.log(msg); 
        },
        function(err) {
          console.log(err);
        }
      );
    });

    
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

loadImage() {
  let options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY      
  }

  this.camera.getPicture(options).then(data => {
    this.currentImage = 'data:image/jpeg;base64,' + data;
   }, err => {
    // Handle error
    console.log(err)
   });
}

shareImage() {
  this.instagram.share(this.currentImage, 'This was copied to your clipboard!')
  .then(() => {
    // Image might have been shared but you can't be 100% sure
  })
  .catch(err => {
    // Handle error
    console.error(err);      
  })
}

}
