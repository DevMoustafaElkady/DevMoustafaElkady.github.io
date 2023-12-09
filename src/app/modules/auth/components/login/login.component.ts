import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = faSignInAlt;
  loader = false
  crumbsConfig = {
    title: "Login",
    list: [
      {
        label: "Home",
        url: '/',
        active: true
      },
      {
        label: "Login",
        url: '/',
        active: false
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, 1000);
  }

}
