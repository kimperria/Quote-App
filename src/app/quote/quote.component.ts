import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Genesis', 'Kimperria', 'In the begining there was terminal', 'Harrison Gitau', new Date()),
    new Quote('Learning', 'Kimperria','It is super easy to forget stuff if you do not write them down', 'Steve Fenton', new Date()),
    new Quote('Life', 'Kimperria', 'Just Do It', 'Nike', new Date())
  ];
    //add client quote
    addNewQuote(qoute: any){
      let quoteLength = this.quotes.length;
      qoute.title = quoteLength;
      // quote.title = quote.Length;
      // qoute.name = quoteLength;
      // qoute.say = quoteLength;
      this.quotes.push(qoute)
    }

  //toggle logic
  toggleQuoteDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  } 

  deleteQuote(deletedQuote, index){
    if(deletedQuote){
      let deleteMessage = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

      if(deleteMessage){
        this.quotes.splice(index, 1);
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
