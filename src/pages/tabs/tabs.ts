import { Component } from '@angular/core';
// import { HeaderPage } from '../header/header'
import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = AddPage;
  tab4Root = ProfilePage;
  tab5Root = AboutPage;
  // tab6Root = Headerpage;

  constructor() {

  }
}
