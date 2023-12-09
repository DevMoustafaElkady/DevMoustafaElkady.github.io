import { Component, OnInit } from '@angular/core';
import { faAt, faLocation, faPaperPlane, faPhone, faSquareEnvelope, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  send = faPaperPlane;
  mail = faAt;
  phone = faPhone;
  location = faLocation;
  loader = false
  crumbsConfig = {
    title: "Contact Us",
    list: [
      {
        label: "Home",
        url: '/',
        active: true
      },
      {
        label: "contact us",
        url: '/contact',
        active: false
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, 500);
  }

}
