import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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

}
