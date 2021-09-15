import { Component, OnInit } from '@angular/core';
import menu from '../../assets/pages.json';
@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css']
})
export class WhoweareComponent implements OnInit {
  pages:any;
  constructor() { }

  ngOnInit() {
    console.log(menu[0].pageOptions[0].menus);
    this.pages=menu[0].pageOptions[0].menus;
  }

}
