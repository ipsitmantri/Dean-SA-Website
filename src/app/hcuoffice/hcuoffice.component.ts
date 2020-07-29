import { Component, OnInit } from '@angular/core';
import {faFax, faLink, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-hcuoffice',
  templateUrl: './hcuoffice.component.html',
  styleUrls: ['./hcuoffice.component.css']
})
export class HcuofficeComponent implements OnInit {

  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;
  constructor() { }

  ngOnInit(): void {
  }

}
