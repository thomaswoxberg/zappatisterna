import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import {ApplicationService} from '../services/application.service'

@Component({
  selector: 'app-lending-input',
  templateUrl: './lending-input.component.html',
  styleUrls: ['./lending-input.component.css']
})
export class LendingInputComponent implements OnInit {
interest:Number;
amount:Number;  
  constructor(private applicationService: ApplicationService) {

   }

  async ngOnInit() {
    let response = await this.applicationService.getTest('http://lendafriend.azurewebsites.net/api/bcdb96fb-3452-46a8-b045-9f2c08e9f2f4/test'); 
    console.log(response); 
  }

  changeInterest(value : number) {
    this.interest = value; 
  }

  changeAmount(value: Number) {
    this.amount = value; 
  }
}
