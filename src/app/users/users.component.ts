import { Component,  OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalformComponent } from '../modalform/modalform.component';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SecondModalComponent } from '../second-modal/second-modal.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  searchText = '';
  property = '';
  user: User;
  users: User[];

  constructor( private matDialog: MatDialog,
              public userService: UserService,
              private modalService: NgbModal) {}

  ngOnInit(){
    this.userService.getUsers().subscribe((res) => {
      this.users = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as User
      } as User));
    });
  }

  openFormModal() {
    const modalRef = this.modalService.open(SecondModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openDialog() {
    this.userService.sendUser(this.user);
    const dialogRef = this.matDialog.open(ModalformComponent,
      {
        hasBackdrop: true,
        closeOnNavigation: true,
        disableClose: true,
        panelClass: 'custom-dialog-container'
      });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      return this.userService.clearUser();
    });
  }

}
