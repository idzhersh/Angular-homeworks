import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ModalformComponent } from './modalform/modalform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserItemComponent } from './users/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UsersComponent,
    ModalformComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
