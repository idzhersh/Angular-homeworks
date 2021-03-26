import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalformComponent } from '../../modalform/modalform.component';
import { User } from '../../user';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent{

 @Input() user: User;

  constructor(
    public userService: UserService,
    public dialog: MatDialog
      ) { }


  deleteUser(id){
      this.userService.deleteUser(id);
  }

  editUser() {
    this.dialog.open(ModalformComponent, {
      hasBackdrop: true, 
      closeOnNavigation: true,
      disableClose: true,
      panelClass: 'custom-dialog-container',
      data: {
        user: this.user
      }
    })
  }
}