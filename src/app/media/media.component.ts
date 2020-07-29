import { Component, OnInit } from '@angular/core';
import {faFax, faLink, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faEnvelope} from '@fortawesome/free-regular-svg-icons';

export interface Editor {
  img: string;
  name: string;
  mail: string;
  site: string;
}
export interface FacAd {
  name: string;
  img: string;
  mail: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {

  fax = faFax;
  address = faAddressCard;
  email = faEnvelope;
  phone = faPhoneAlt;
  website = faLink;
  chiefEditors: Editor[] = new Array<Editor>(2);
  facAds: FacAd[] = new Array<FacAd>(3);
  constructor() { }

  ngOnInit(): void {
    this.chiefEditors[0] = {img: 'assets/images/amogh.png', mail: '170020027@iitb.ac.in', name: 'Amogh Gawaskar', site: 'https://www.insightiitb.org/'};
    this.chiefEditors[1] = {img: 'assets/images/suman.png', mail: 'suman_mondal@iitb.ac.in', name: 'Suman Mondal', site: 'https://www.insightiitb.org/'};
    this.facAds[0] = {img: 'assets/images/vjs.png', name: 'Prof. Vaijayanthi Sarma', mail: 'vsarma@iitb.ac.in'};
    this.facAds[1] = {img: 'assets/images/akshay.png', name: 'Prof. S Akshay', mail: 'akshayss@cse.iitb.ac.in'};
    this.facAds[2] = {img: 'assets/images/manju.png', name: 'Prof. D Manjunath', mail: 'dmanju@ee.iitb.ac.in'};
  }

}
