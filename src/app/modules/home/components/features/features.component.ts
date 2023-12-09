import { Component, OnInit } from '@angular/core';
import { faChalkboardTeacher, faLightbulb, faStamp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  course = faChalkboardTeacher;
  lumb = faLightbulb;
  stamp = faStamp;
  constructor() { }

  ngOnInit(): void {
  }

}
