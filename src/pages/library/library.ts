import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotePage } from '../quote/quote';
/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

	quoteCollection: {category: string, quotes: Quote[], icon: string}[];
	quotesPage = QuotePage;
	ngOnInit(){
		this.quoteCollection = quotes;
	}
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	  console.log('ionViewDidLoad LibraryPage');
	}

}
