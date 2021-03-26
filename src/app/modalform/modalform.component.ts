import { Component, Inject, Input, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})
export class ModalformComponent implements OnInit{

  newUser: User = {
     name: '',
     surname: '', 
     email: '',
     age: 0
   };

  constructor(  
    public dialogRef: MatDialogRef<ModalformComponent>,
    public userService: UserService,
    @Inject (MAT_DIALOG_DATA) public data){}

    ngOnInit() {
      this.setUser();
    }

    close() {
      this.dialogRef.close();
    }

    setUser(){
      if(this.data){
         this.newUser = {...this.data.user};
      }
    }

  add(user: User){
    if(this.data){
      this.userService.editUsers(user);
      this.dialogRef.close();
    }else{
       this.userService.addUser(user);
      this.clearForm();
      this.dialogRef.close();
    } 
  }

  clearForm() {
    this.newUser = {
      name: '',
      surname: '', 
      email: '',
      age: 0
    }
  }
}


