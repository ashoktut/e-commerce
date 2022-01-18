import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { menuController } from '@ionic/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public isMenuEnabled = true;
  public selectedIndex = 0;

  constructor(
    private platform: Platform,

    private utility: UtilityService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('splash');
    });
  }

  ngOnInit() {
    this.selectedIndex = 1;

    this.utility.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }

  navigate(path, selectedId) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  close() {
    menuController.toggle();
  }
}
