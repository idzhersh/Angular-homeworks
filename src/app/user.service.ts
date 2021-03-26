import { Injectable, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {id:1, name:'vasia', surname:'vovk', email:'vasia@gmail.com', age:22},
    {id:2, name:'petia', surname:'zayets', email:'petia@gmail.com', age:23},
    {id:3, name:'sasha', surname:'lys', email:'sasha@gmail.com', age:24},
  ];

  users$ = new Subject();

  getInitial() {
    return new Promise<User[]>(res => res(this.users));
  }

  getUsers(): Observable<any> {
    return this.users$.asObservable();
  }

  addUser(user: User): any{ 
      user.id = this.users.length + 1;
      this.users = [...this.users, user];
      this.users$.next(this.users);
  }

  editUsers(user: User){
    let index = this.users.findIndex(item => item.id === user.id);
    this.users = [...this.users.slice(0, index), user, ...this.users.slice(index+1, this.users.length)];
    this.users$.next(this.users);
  }

  deleteUser(id: number){
      this.users = this.users.filter(user => user.id != id);
      this.users$.next(this.users);
    }
}


