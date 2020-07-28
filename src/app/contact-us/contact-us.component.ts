import { Component, OnInit } from '@angular/core';
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faFax, faPhoneAlt, faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  prev = 'dsaa';
  prevS = 'gshaa';
  prev2 = 'mii';
  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;

  constructor() { }

  ngOnInit(): void {
  }

  display(event: any): void {
    const bef = document.getElementById(this.prev);
    bef.style.display = 'none';
    let id = event.target.id;
    id = id.toString();
    const ele = document.getElementById(id + id[id.length - 1]);
    if (ele.style.display === 'none') {
      ele.style.display = 'block';
    }
    else {
      ele.style.display = 'none';
    }
    this.prev = ele.id;
  }

  switch(event: any): void {
    const bef = document.getElementById(this.prevS);
    if (bef.style.display !== 'none') {
      bef.style.display = 'none';
    }
    const id = event.target.id.toString();
    const ele = document.getElementById(id + id[id.length - 1]);
    if (ele.style.display === 'none') {
      ele.style.display = 'block';
    }
    else {
      ele.style.display = 'none';
    }
    this.prevS = ele.id;
  }

  switch2(event: any): void {
    const bef = document.getElementById(this.prev2);
    if (bef.style.display !== 'none') {
      bef.style.display = 'none';
    }
    const id = event.target.id.toString();
    const ele = document.getElementById(id + id[id.length - 1]);
    if (ele.style.display === 'none') {
      ele.style.display = 'block';
    }
    else {
      ele.style.display = 'none';
    }
    this.prev2 = ele.id;
  }

}
