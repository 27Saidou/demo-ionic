import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import {AuthPage} from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any=AuthPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
       let firebaseConfig = {
    apiKey: "AIzaSyBSSrsckRc-UNXG8Swr4UojzZ3Dpu9CAOQ",
    authDomain: "bakeli-ionic.firebaseapp.com",
    databaseURL: "https://bakeli-ionic.firebaseio.com",
    projectId: "bakeli-ionic",
    storageBucket: "bakeli-ionic.appspot.com",
    messagingSenderId: "522205341473",
    appId: "1:522205341473:web:c366181894072304"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
}
}
