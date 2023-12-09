import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  crumbsConfig = {
    title: "services",
    list: [
      {
        label: "Home",
        url: '/',
        active: true
      },
      {
        label: "services",
        url: '/services',
        active: false
      }
    ]
  }
  loader = false
  constructor() { }

  ngOnInit(): void {
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, 1000);
  }

}
