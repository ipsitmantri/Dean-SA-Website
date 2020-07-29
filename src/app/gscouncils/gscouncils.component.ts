import { Component, OnInit } from '@angular/core';
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faFax, faPhoneAlt, faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gscouncils',
  templateUrl: './gscouncils.component.html',
  styleUrls: ['./gscouncils.component.css']
})
export class GscouncilsComponent implements OnInit {
  prevS = 'gshaa';
  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;
  constructor() { }

  ngOnInit(): void {
  }

  switch(event: any): void {
    const bef = document.getElementById(this.prevS);
    document.getElementById(this.prevS.substr(0, this.prevS.length - 1)).classList.remove('active');
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
    this.prevS = ele.id;
  }

}
