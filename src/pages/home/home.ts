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
      image:"assets/imgs/slide.jpg",
      feedback:'Good',
    },
    {
      title: 'Slider2',
      image:'assets/imgs/slide.jpg ',
      feedback:'Good',
    },
    {
      title: 'Slider3',
      image:'assets/imgs/slide.jpg ',
      feedback:'Good',
    },
    {
      title: 'Slider4',
      image:'assets/imgs/slide.jpg ',
      feedback:'Good',
    },

    {
      title: 'Slider5',
      image:'assets/imgs/slide.jpg ',
      feedback:'Good',
    },
    {
      title: 'Slider6',
      image:'assets/imgs/slide.jpg ',
      feedback:'Good',
    }
  ];
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
