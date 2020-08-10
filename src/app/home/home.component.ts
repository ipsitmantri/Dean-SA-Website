import { Component, OnInit } from '@angular/core';
import {Dean} from './dean';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deanSA: Dean;
  adeanSA: Dean;
  instiPics: string[] = new Array<string>();

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.deanSA = {
      picture: 'assets/images/T_KUNDU.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      signature: 'Dean Student Affairs<br>IIT Bombay'
    };

    this.adeanSA = {
      picture: 'assets/images/GMT1.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      signature: 'Associate Dean Student Affairs<br>IIT Bombay'
    };
    this.instiPics = [
      'assets/images/home/1-min.jpg',
      'assets/images/home/6-min.jpg',
      'assets/images/home/7U4A6218-min.jpg',
      'assets/images/home/227A0588-min.jpg',
      'assets/images/home/APJ-min.jpg',
      'assets/images/home/ARS_1031-min.jpg',
      'assets/images/home/DSC03797-min.jpg',
      'assets/images/home/erchome-1.png',
      'assets/images/home/event1.png',
      'assets/images/home/event3.png',
      'assets/images/home/football1-min.jpg',
      'assets/images/home/girlscrossy-min.jpg',
      'assets/images/home/IMG_0124-min.jpg',
      'assets/images/home/IMG_0125-min.jpg',
      'assets/images/home/IMG_0131.PNG',
    ];
  }

}
