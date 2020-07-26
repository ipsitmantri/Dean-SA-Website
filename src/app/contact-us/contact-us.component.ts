import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  prev = 'dsaa';

  constructor() { }

  ngOnInit(): void {
  }

  display(event: any): void {
    const bef = document.getElementById(this.prev);
    bef.style.display = 'none';
    let id = event.target.id;
    id = id.toString();
    const ele = document.getElementById(id + id[id.length - 1]);
    console.log(ele);
    if (ele.style.display === 'none') {
      ele.style.display = 'block';
    }
    else {
      ele.style.display = 'none';
    }
    this.prev = ele.id;
  }

}
