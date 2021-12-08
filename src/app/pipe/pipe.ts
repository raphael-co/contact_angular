import { Pipe, PipeTransform } from '@angular/core';
import { Arr } from '../models/arr';

@Pipe({
    name: 'taskFilter',
    pure: false
  })
export class FilterTaskFini implements PipeTransform {

  transform(idSelect: Arr[], id: number): Arr[] {
    return idSelect.filter(t => t.id == id);
  }

}