import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
rightQoutes = faQuoteRight
leftQoutes = faQuoteLeft
  constructor() { }

  ngOnInit(): void {
  }

}
