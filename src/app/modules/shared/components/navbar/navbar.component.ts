import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
tabs = [
  { name: 'home', navigate: '/' },
  { name: 'about us', navigate: 'about' },
  { name: 'services', navigate: 'services' },
  { name: 'study with EV', navigate: 'study' },
  { name: 'placement test', navigate: 'placementtest' },
  { name: 'contact us', navigate: 'contact' },
]
  login = faSignInAlt;
  register = faUserTie;
  // <i class="fas fa-wine-glass" > </i>
  constructor() { }

  ngOnInit(): void {
  }

}
