import { Component, OnInit } from '@angular/core';
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faFax, faPhoneAlt, faLink } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-deansa',
  templateUrl: './deansa.component.html',
  styleUrls: ['./deansa.component.css']
})
export class DeansaComponent implements OnInit {

  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;
  constructor() { }

  ngOnInit(): void {
  }

}
