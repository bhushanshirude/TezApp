import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public value: String;
  constructor(public navCtrl: NavController) { }
  // images on card repeated
  slider = [
    {
      title: 'Slide1',
      image: "assets/imgs/slide.jpg",
      feedback: 'Good',
    },
    {
      title: 'Slide2',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
    },
    {
      title: 'Slide3',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
    },
    {
      title: 'Slide4',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
    },

    {
      title: 'Slide5',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
    },
    {
      title: 'Slide6',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
    }];

  // smile images card
  smiles = [{
    title:'1',
    images:'assets/imgs/expression.jpg'
  }, {
    title:'2',
    images:'assets/imgs/expression.jpg'
  },
  {
    title:'3',
    images:'assets/imgs/expression.jpg'
  }];

  // =============>header-Section<==============
  search() {
    console.log("=============>Search Bar Open<==============");
  }
  add() {
    console.log("=============>Add To Cart<==============");
  }
  profile() {
    console.log("=============>See Profile<==============");
  }

  // ================>ion-content<===============
  up() {
    console.log("===============thumbs-up==============");
  }
  down() {
    console.log("===============thumbs-down==============");
  }
  happy() {
    this.value = 'feedback';
    console.log("===============happy==============");
  }

}

