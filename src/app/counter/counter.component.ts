import { Component, OnInit } from '@angular/core';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;
  increaseButtonAppear: boolean = true;
  decreaseButtonAppear: boolean = true;
  textBackgroundColor: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
  }

  decreaseCount(): void {
    this.count--;
  }

  changeButton(): void {
    this.increaseButtonAppear = this.count <= 10;
    this.decreaseButtonAppear = this.count >= 0;
  }

  changeColor(): void {

    if (this.count > 10) {
      this.textBackgroundColor = 'red';
    }
    else if (this.count < 0) {
      this.textBackgroundColor = 'green';
    }
    else {
      this.textBackgroundColor = 'white';
    }
  }
}
