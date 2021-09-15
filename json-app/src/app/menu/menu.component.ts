import { Component, OnInit } from '@angular/core';
import menu from '../../assets/pages.json';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pages:any;
  constructor() { }

  ngOnInit() {
    console.log(menu[0].pageOptions[0].menus);
    this.pages=menu[0].pageOptions[0].menus;
  }

}
