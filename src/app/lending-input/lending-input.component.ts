import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-lending-input',
  templateUrl: './lending-input.component.html',
  styleUrls: ['./lending-input.component.css']
})
export class LendingInputComponent implements OnInit {
interest:Number; 
  constructor() { }

  ngOnInit() {
  }

  changeInterest(value : number) {
    this.interest = value; 
  }
}
