import { Component, OnInit } from '@angular/core';
import { faChild, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
child = faChild
  adult = faUserGraduate
  constructor() { }

  ngOnInit(): void {
  }

}
