import { ScreenService } from '../services/screen.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(public screenService: ScreenService,
              public menuService: MenuService) { }

  ngOnInit() { }

}
