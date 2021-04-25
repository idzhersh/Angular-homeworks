import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersComponent } from './users.component';
import { UsersPipe } from './users.pipe';
import { UsersSearchPipe } from './users-search.pipe';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    UserItemComponent,
    UsersComponent,
    UsersPipe,
    UsersSearchPipe,
    FilterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    UsersComponent,

  ]
})
export class UsersModule { }
