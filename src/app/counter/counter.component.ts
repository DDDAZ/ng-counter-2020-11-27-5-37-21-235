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

  constructor() { }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    this.changeButton();
  }

  decreaseCount(): void {
    this.count--;
    this.changeButton();
  }

  changeButton(): void {
    this.increaseButtonAppear = this.count <= 10;
    this.decreaseButtonAppear = this.count >= 0;
  }
}
