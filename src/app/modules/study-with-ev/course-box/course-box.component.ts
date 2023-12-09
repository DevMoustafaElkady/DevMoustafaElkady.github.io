import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faChevronDown, faChevronUp, faClock, faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.scss']
})
export class CourseBoxComponent implements OnInit {
toggleDetails = false
  bottom = faChevronDown
  up = faChevronUp
  price = faMoneyBill
  time = faClock
  whatsapp = faWhatsapp
  email = faEnvelope
  book = faBookOpen
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.toggleDetails = !this.toggleDetails
  }

}
