import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-second-modal',
  templateUrl: './second-modal.component.html',
  styleUrls: ['./second-modal.component.css']
})
export class SecondModalComponent  {

  myForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public userService: UserService
    ) {
     this.createForm();
   } 
   
  createForm() {
      this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]{3,10}/), Validators.maxLength(10)]),
      surname: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]{3,10}/), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.email, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      age: new FormControl('', [Validators.required, Validators.min(12), Validators.max(100)]),
    });
  }

  get name() {
    return this.myForm.get('name');
  }  

  get surname() {
    return this.myForm.get('surname');
  }

  get email() {
    return this.myForm.get('email');
  }

  get age() {
    return this.myForm.get('age');
  }

  public submitForm() {
    this.activeModal.close(this.myForm.value);
    this.userService.add(this.myForm.value);
  }

}
