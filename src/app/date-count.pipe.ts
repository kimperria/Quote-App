import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDay())
    var dateDifference = Math.abs(value - todayWithNoTime)//returns value in milliseconds
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;//converts millisecond to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    var roundOff = Math.floor(dateCounter);

    if (dateCounter >= 1 && todayWithNoTime > value){
      return roundOff;
    }else{
      return 0;
    }
  }

}
