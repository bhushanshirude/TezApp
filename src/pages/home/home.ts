import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformationPage } from '../information/information';
import {Information2Page} from '../information2/information2';

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
      page:InformationPage
    },
    {
      title: 'Slide2',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
      page:Information2Page
    },
    {
      title: 'Slide3',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
      page:Information2Page
    },
    {
      title: 'Slide4',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
      page:Information2Page

    },

    {
      title: 'Slide5',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
      page:Information2Page
    },
    {
      title: 'Slide6',
      image: 'assets/imgs/slide.jpg ',
      feedback: 'Good',
      page:Information2Page

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

  information(page){
    this.navCtrl.push(page);
  }
}

