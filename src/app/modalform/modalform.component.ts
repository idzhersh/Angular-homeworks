import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FORM_ACTION_TOKEN } from '../constants/form.constants';
import { ActionInterface} from '../interfaces/action';
import { User } from '../interfaces/user';
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

   formActions: ActionInterface;

  constructor(
    public dialogRef: MatDialogRef<ModalformComponent>,
    public userService: UserService,
    @Inject (MAT_DIALOG_DATA) public data,
    @Inject(FORM_ACTION_TOKEN) private config: {[name: string]: ActionInterface}){}

    ngOnInit() {
      this.setConfig();
    }

    setConfig(){
      if(this.data){
         this.formActions = this.config.edit;
         this.newUser = {...this.data.user};
      }else {
         this.formActions = this.config.add;
      }
    }

  add(user: User){
    if(this.data){
      this.userService.edit(user);
      this.dialogRef.close();
    }else{
       this.userService.add(user);
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
    };
  }

  close() {
    this.dialogRef.close();
  }
}


