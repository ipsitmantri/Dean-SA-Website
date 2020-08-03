import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hcu',
  templateUrl: './hcu.component.html',
  styleUrls: ['./hcu.component.css']
})
export class HcuComponent implements OnInit {
  hostelPics: string[] = new Array<string>();
  no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 15, 20];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    for (let i = 0; i <= 30; i++) {
      if (!this.no.includes(i)){
        this.hostelPics.push('assets/images/' + i.toString() + '.jpg');
      }
    }
    this.hostelPics.push('assets/images/tansa.png');
  }

}
