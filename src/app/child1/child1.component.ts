import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() count: any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  message:string="my new data";
  
  constructor(private myService:MyServiceService) {
  }
  increment() {
    this.countChanged.emit(3);
  }
  clickMe(){
    this.myService.ChangeMessage(this.message);
  }
}
