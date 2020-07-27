import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hcu',
  templateUrl: './hcu.component.html',
  styleUrls: ['./hcu.component.css']
})
export class HcuComponent implements OnInit {
  hostelPics: string[] = new Array<string>();

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    for (let i = 1; i < 17; i++) {
      this.hostelPics.push('assets/images/' + i.toString() + '.jpg');
    }
    this.hostelPics.push('assets/images/tansa.png');
    console.log(this.hostelPics);
  }

}
