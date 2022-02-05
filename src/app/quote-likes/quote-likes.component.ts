import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-likes',
  templateUrl: './quote-likes.component.html',
  styleUrls: ['./quote-likes.component.css']
})
export class QuoteLikesComponent implements OnInit {

  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
