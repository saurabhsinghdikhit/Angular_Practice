import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message:string="ram";
  imageUrl:string="favicon.ico"
  birthday = new Date(1998, 12, 15);
  constructor(private myService:MyServiceService) {
   }
   template() {
    console.log('template statement executed');
  }
  ngOnInit(): void {
    this.myService.currentMessage.subscribe(data=>{
      console.log(data);
    });
  }

}
