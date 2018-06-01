import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public value: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  search() {
    console.log("=============>Search Bar Open<==============");
    this.value = 'searchbar';
  }
  add() {
    console.log("=============>Add To Cart<==============");

  }
  profile() {
    console.log("=============>See Profile<==============");
  }
  
  items = [
    ' Afghanistan ',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola ',
    'Antigua',
    ' Barbuda',
    'Argentina',
    'Armenia',
    'Aruba  ',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia',
    'Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina',
    'Burundi',
  ];
}
