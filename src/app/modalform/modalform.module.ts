import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalformComponent } from './modalform.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FORM_ACTION_CONFIG, FORM_ACTION_TOKEN } from '../constants/form.constants';

@NgModule({
  declarations: [
    ModalformComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
  ],
  providers:[
    {provide: FORM_ACTION_TOKEN, useValue: FORM_ACTION_CONFIG}
  ],
  exports:[
    ModalformComponent
  ]
})
export class ModalformModule { }
