import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.color='gold';
  }

  @HostListener('click') onClicks(){
    this.color('gold')
  }

  // @HostListener('dblclick') onDoubleClicks(){
  //   this.color('white')
  // }

  private color(action:string){
    this.elem.nativeElement.style.color=action;
  }

}
