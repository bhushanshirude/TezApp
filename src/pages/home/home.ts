import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  search() {
    console.log("=============>Search Bar Open<==============");
  }
  add() {
    console.log("=============>Add To Cart<==============");
  }
  profile() {
    console.log("=============>See Profile<==============");
  }
}
