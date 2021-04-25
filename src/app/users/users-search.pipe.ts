import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterUsers'
})
export class UsersSearchPipe implements PipeTransform {

  transform(users: User[], search: string="", property: string): any[] {
    if(!search.trim()) {
      return users
    }
    return users.filter(user => {
      return String(user[property]).toLowerCase().includes(search.toLowerCase())
    })
  }

}
