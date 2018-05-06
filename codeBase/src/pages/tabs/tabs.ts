import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { Settings } from '../settings/settings';
import { Restaurant } from '../restHome/rest';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Restaurant;
  tab2Root = AboutPage;
  tab3Root = Settings;

  constructor() {

  }
}
