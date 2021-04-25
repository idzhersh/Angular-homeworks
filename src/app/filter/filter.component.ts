import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor() { }

  searchText = '';
  property = 'id';

  getSelected(value){
    this.property = value;
    console.log(this.property)
  }

}
