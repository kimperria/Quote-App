import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // quote = 'In the begining, there was terminal'

  quotes:string[];

  constructor(){
    this.quotes = ['In the begining there was terminal', 'It is super easy to forget stuff is you do not write them down', 'Just do it']
  }
}
