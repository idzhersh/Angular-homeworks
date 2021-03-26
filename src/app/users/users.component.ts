import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ModalformComponent } from '../modalform/modalform.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  user: User;
  users: User[];
  subscription: Subscription;
  constructor( private matDialog: MatDialog,
              public userService: UserService) {}

  ngOnInit(){
    this.userService.getInitial().then(data => this.users = [...data]);
    this.subscription = this.userService.getUsers().subscribe(data => 
      this.users = [...data]);
  }
  
  openDialog() {
    this.matDialog.open(ModalformComponent, 
      {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: true,
        panelClass: 'custom-dialog-container'
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
