import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  slider = [
    {
      title: 'Slider1',
    },
    {
      title: 'Slider2',
    },
    {
      title: 'Slider3',
    },
    {
      title: 'Slider4',
    },

    {
      title: 'Slider5',
    },
    {
      title: 'Slider6',
    }
  ]
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
