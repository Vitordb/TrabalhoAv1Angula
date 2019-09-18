import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 url = 'http://blog.origzo.com/wp-content/uploads/2015/09/avengers.png';
 description = 'devengers'

  constructor() { }

  ngOnInit() {
  }

}


