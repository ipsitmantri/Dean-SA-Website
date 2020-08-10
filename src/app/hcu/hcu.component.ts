import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {faFax, faLink, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-hcu',
  templateUrl: './hcu.component.html',
  styleUrls: ['./hcu.component.css']
})
export class HcuComponent implements OnInit {
  hostelPics: string[] = new Array<string>();
  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.hostelPics = [
      'assets/images/hcu/12-min.jpg',
      'assets/images/hcu/14-min.jpg',
      'assets/images/hcu/16-min.jpg',
      'assets/images/hcu/Screenshot_2020-07-29-12-04-05-64-min.jpg',
      'assets/images/hcu/Screenshot_2020-07-29-12-05-53-93-min.jpg',
      'assets/images/hcu/Screenshot_2020-07-29-12-06-48-41-min.jpg',
      'assets/images/hcu/Screenshot_2020-07-29-12-07-21-33-min.jpg',
      'assets/images/hcu/Screenshot_2020-07-29-12-08-32-05-min.jpg',
      'assets/images/hcu/Screenshot_2020-07-29-12-10-52-04-min.jpg',
    ];
  }

}
