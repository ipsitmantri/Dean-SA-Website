import { Component } from '@angular/core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import {faFax, faPhoneAlt, faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dean-SA-Website';
  map = faMapMarkedAlt;
  fax = faFax;
  phone = faPhoneAlt;
  website = faLink;
}
