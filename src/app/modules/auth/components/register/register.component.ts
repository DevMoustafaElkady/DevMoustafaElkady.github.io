import { Component, OnInit } from '@angular/core';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register = faUserTie;
  loader = false
  crumbsConfig = {
    title: "Register",
    list: [
      {
        label: "Home",
        url: '/',
        active: true
      },
      {
        label: "Register",
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
