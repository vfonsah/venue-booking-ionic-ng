import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  constructor(private authSrvc: AuthService, private router: Router) {}
  isLoading = false;
  ngOnInit() {}

  onLogIn() {
    this.isLoading = true;
    this.authSrvc.logIn();
    setTimeout(() => {this.isLoading = false; this.router.navigateByUrl('/places/tabs/discover')}, 1500);
  }
}
