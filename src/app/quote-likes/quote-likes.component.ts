import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-likes',
  templateUrl: './quote-likes.component.html',
  styleUrls: ['./quote-likes.component.css']
})
export class QuoteLikesComponent implements OnInit {

  @Input() quote: Quote;
  @Output() deleteQuote=new EventEmitter<boolean>();

  likes: number = 0;
  upvoteThisQuote(){
    this.likes++;
  };

  dislikes: number = 0;
  downVoteThisQuote(){
    this.dislikes--;
  }

  deleteThisQuote(complete:boolean){
    this.deleteQuote.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
