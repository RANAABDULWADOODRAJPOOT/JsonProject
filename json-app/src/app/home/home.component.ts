import { Component, OnInit } from '@angular/core';
import menu from '../../assets/pages.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages:any;
  constructor() { }

  ngOnInit() {
    console.log(menu[0].pageOptions[0].menus);
    this.pages=menu[0].pageOptions[0].menus;
  }

}
