import { ScreenService } from './../services/screen.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public menuService: MenuService,
              public screenService: ScreenService) { }

  ngOnInit() {
  }

}
