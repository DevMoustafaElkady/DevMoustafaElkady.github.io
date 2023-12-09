import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-with-ev',
  templateUrl: './study-with-ev.component.html',
  styleUrls: ['./study-with-ev.component.scss']
})
export class StudyWithEvComponent implements OnInit {
  crumbsConfig = {
    title: "study with EV",
    list: [
      {
        label: "Home",
        url: '/',
        active: true
      },
      {
        label: "study with EV",
        url: '/study',
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
