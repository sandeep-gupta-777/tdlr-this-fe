import {Pipe, PipeTransform} from '@angular/core';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  constructor(private utilityService: UtilityService) {
  }

  transform(value: any, args?: any): any {
    return this.utilityService.timeSince(Number(value));
  }
}
