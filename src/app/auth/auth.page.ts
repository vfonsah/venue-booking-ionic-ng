import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private authSrvc: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}
  ngOnInit() {}

  onLogIn() {
    this.isLoading = true;
    this.authSrvc.logIn();
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
