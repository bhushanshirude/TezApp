import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HeaderPage} from '../header/header'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
