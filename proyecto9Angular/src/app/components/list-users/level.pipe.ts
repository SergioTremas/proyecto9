import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: any): any {
    if (value === '1') {
      return 'Principiante';

    } else if (value === '2') {
      return 'Intermadio';

    } else if (value === '3') {
      return 'Experto';
    }

  }

}
