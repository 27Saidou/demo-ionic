import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavParams,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-auth',
  templateUrl: './auth.html'
})
export class AuthPage implements OnInit {
 mode: string;
  constructor(private authService: AuthService,
              private navParams: NavParams,private menuCtrl:MenuController) {}

  ngOnInit() {
this.mode = this.navParams.get('mode');
  }
   onToggleMenu() {
    this.menuCtrl.open();
  }
}