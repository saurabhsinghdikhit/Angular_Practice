import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Message from app component.ts file';
  cnt:string="4";
  Counter = 5;
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(this.Counter++);
  }
}
