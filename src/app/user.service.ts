import { Injectable, Input, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {id:1, name:'vasia', surname:'vovk', email:'vasia@gmail.com', age:22},
    {id:2, name:'petia', surname:'zayets', email:'petia@gmail.com', age:23},
    {id:3, name:'sasha', surname:'lys', email:'sasha@gmail.com', age:24},
  ];
  user: User;

  constructor(private firestore: AngularFirestore){}

  getUser() {
    return this.user;
  }

  sendUser(user) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }

  getUsersDoc(id) {
    return this.firestore
      .collection('users')
      .doc(id)
      .valueChanges();
  }

  getUsers() {
    return this.firestore
      .collection('users')
      .snapshotChanges();
  }

  add(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(user)
        .then((response) => { console.log(response); }, (error) => reject(error));
    });
  }

  delete(id) {
    return this.firestore
      .collection('users')
      .doc(id)
      .delete();
  }

  edit(user: User) {
    return this.firestore
      .collection('users')
      .doc(user.id)
      .update({
        name: user.name,
        surname: user.surname,
        email: user.email,
        age: user.age
      });
  }



  // users$ = new Subject();


  // getInitial() {
  //   return new Promise<User[]>(res => res(this.users));
  // }

  // getUsers(): Observable<any> {
  //   return this.users$.asObservable();
  // }

  // add(user: User): any{ 
  //     user.id = this.users.length + 1;
  //     this.users = [...this.users, user];
  //     this.users$.next(this.users);
  // }

  // edit(user: User){
  //   let index = this.users.findIndex(item => item.id === user.id);
  //   this.users = [...this.users.slice(0, index), user, ...this.users.slice(index+1, this.users.length)];
  //   this.users$.next(this.users);
  // }

  // delete(id: number){
  //     this.users = this.users.filter(user => user.id != id);
  //     this.users$.next(this.users);
  //   }
}


