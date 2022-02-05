import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // quote = 'In the begining, there was terminal'

  // quotes:string[];
  quotes:Quote[] = [
    {say:'In the begining there was terminal', author:'Harrison Gitau'},
    {say:'It is super easy tp forget stuff if you do not write them down', author:'Steve Fenton'},
    {say:'Just Do It', author:'Nike'}
  ];

  constructor(){
  }
}
