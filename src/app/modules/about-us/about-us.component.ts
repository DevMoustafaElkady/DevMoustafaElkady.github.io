import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faLightbulb, faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  crumbsConfig = {
    title: "about Us",
    list: [
      {
        label: "Home",
        url: '/',
        active: true
      },
      {
        label: "about us",
        url: '/about',
        active: false
      }
    ]
  }
  pen = faPencilAlt
  lamp = faLightbulb
  award = faAward

  constructor() { }

  ngOnInit(): void {
  }

}
