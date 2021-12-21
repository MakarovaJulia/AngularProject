import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatValue'
})
export class FormatValuePipe implements PipeTransform {

  transform(value: any[], id: number): unknown {

    return value.find(item => item.id === id);
  }

}
