import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

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
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private quotesService: QuotesService) {
        	

    }
    ngOnInit() {
        this.quoteGroup = this.navParams.data;
    }
    ionViewDidLoad() {
    }
    onAddToFavorites(selectedQuote: Quote){
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the quote?',
        buttons: [
            {
                text: 'Yes, go ahead',
                handler: () => {
                    this.quotesService.addQuoteToFavorites(selectedQuote);
                }
            },
            {
                text: 'No, I changed my mind',
                role: 'cancel',
                handler: () => {
                    console.log('cancelled');
                } 
            }
        ]
      });
      alert.present();
    }

    onRemoveFromFavorites(quote: Quote){
        this.quotesService.removeQuoteFromFavorites(quote);
    }

    isQuoteFavorite(quote: Quote){
        return this.quotesService.isQuoteFavorite(quote);
    }

}
