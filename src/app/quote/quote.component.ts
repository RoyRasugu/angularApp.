import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Brian', 'Living Life', 'Live as if you were to die tomorrow. Learn as if you were to live forever','Milton Berle',new Date(2021,7,23),0,0),
    new Quote(2, 'Katie', 'Personal Feelings', 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind','Napoleon Hill',new Date(2021,6,17),0,0),
    new Quote(3, 'Catherine', 'Human Perceptions', 'We must not allow other people’s limited perceptions to define us.','Oscar Wilde',new Date(2021,1,12),0,0),
    new Quote(4, 'Wendell', 'Greatness', 'If you cannot do great things, do small things in a great way','Virginia Satir',new Date(2021,2,14),0,0),
    new Quote(5, 'Carter', 'Important Wisdom', 'Wise men speak because they have something to say; fools because they have to say something','Bernard M. Baruch',new Date(2021,7,14),0,0),
    new Quote(6, 'Petra', 'Success', 'Strive not to be a success, but rather to be of value.','Lao Tzu',new Date(2021,1,30),0,0)
   ];
   get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote: any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete: any, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  displayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  ngOnInit(): void {
  }

}
