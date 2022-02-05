import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Genesis', 'In the begining there was terminal', 'Harrison Gitau'),
    new Quote('Learning','It is super easy tp forget stuff if you do not write them down', 'Steve Fenton'),
    new Quote('Life', 'Just Do It', 'Nike')
  ];

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
