import { Component, OnInit } from '@angular/core';
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faFax, faPhoneAlt, faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ib',
  templateUrl: './ib.component.html',
  styleUrls: ['./ib.component.css']
})
export class IbComponent implements OnInit {

  prev2 = 'mii';
  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;
  constructor() { }

  ngOnInit(): void {
  }

  switch2(event: any): void {
    const bef = document.getElementById(this.prev2);
    document.getElementById(this.prev2.substr(0, this.prev2.length - 1)).classList.remove('active');
    if (bef.style.display !== 'none') {
      bef.style.display = 'none';
    }
    const id = event.target.id.toString();
    document.getElementById(id).classList.add('active');
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
