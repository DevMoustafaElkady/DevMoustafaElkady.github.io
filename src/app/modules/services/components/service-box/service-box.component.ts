import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.scss']
})
export class ServiceBoxComponent implements OnInit {
  email = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

}
