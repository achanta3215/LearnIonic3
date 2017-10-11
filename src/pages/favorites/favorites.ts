import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService} from '../../services/quotes';
import { QuotesPage } from '../quotes/quotes';
/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService, private ModalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.ModalCtrl.create(QuotesPage, quote);
    modal.present();
    modal.onDidDismiss( (remove: boolean) => {
      if (remove)
        this.quotesService.removeQuoteFromFavorites(quote);
        const position = this.quotes.findIndex( (quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
    });
  }
}
