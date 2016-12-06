import { Component, ViewChild } from '@angular/core';

import { Platform, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { UsersPage } from '../pages/users/users';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage = UsersPage;

  constructor(public platform: Platform ) {
    this.initializeApp();    
   }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
}
