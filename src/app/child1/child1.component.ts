import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() count: any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  increment() {
    this.countChanged.emit(3);
  }
}
