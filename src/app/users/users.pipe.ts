import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersPipe'
})
export class UsersPipe implements PipeTransform {

  transform(name: string): string {
    return name !== '' ? `${name}	+++` : '';
  }

}
