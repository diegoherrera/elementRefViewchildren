import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  message: string; 
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementar() {
    this.count = this.count + 1;
    this.message = "countador " + this.count;
  }

  public decrementar() {
    this.count = this.count -1;
    this.message = "countador " + this.count;
  }

}
