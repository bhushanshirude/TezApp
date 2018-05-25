import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
private value :String;
  constructor(public navCtrl: NavController) {

  }
  search() {
    console.log("=============>Search Bar Open<==============")
  }
  add() {
    console.log("=============>Add To Cart<==============")
   this.value ='1';
  }
  profile() {
    console.log("=============>See Profile<==============")
  }
}
