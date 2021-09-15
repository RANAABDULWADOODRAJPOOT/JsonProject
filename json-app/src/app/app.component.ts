import { Component } from '@angular/core';
import menu from '../assets/pages.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  pages:any;
  title = 'json-app';

  ngOnInit() {
    console.log(menu[0].pageOptions[0].menus);
    this.pages=menu[0].pageOptions[0].menus;

  }
}
