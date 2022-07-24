
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { employeei } from 'src/app/empoloyeeinterface';


@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
@Input() p?:employeei;
@Output() onDeleteEmpoloy:EventEmitter<employeei>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(p:employeei){
    this.onDeleteEmpoloy.emit(p);
  }

}