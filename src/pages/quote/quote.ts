import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
/**
 * Generated class for the QuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{
    quoteGroup: {category: string, quotes: Quote[], icon: string};
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        	

    }
    ngOnInit() {
      this.quoteGroup = this.navParams.data;
    }
    ionViewDidLoad() {
    }

}
