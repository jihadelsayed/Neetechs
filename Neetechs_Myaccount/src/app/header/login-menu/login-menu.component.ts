import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logIn() {
    window.location.href = environment.LoginURL+window.navigator.language.slice(0, 2)+'/#/signin/' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language + "&" + "pathname=" + window.location.pathname;
  }
  SignUp() {
    window.location.href = environment.LoginURL+window.navigator.language.slice(0, 2)+'/#/signup/' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language + "&" + "pathname=" + window.location.pathname;
  }
}
