import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-lending-input',
  templateUrl: './lending-input.component.html',
  styleUrls: ['./lending-input.component.css']
})
export class LendingInputComponent implements OnInit {
interest:Number;
amount:Number;
parameters:Array<any>=new Array();
lenderID:String;  
  constructor() { }

  ngOnInit() {
let href:string = document.location.href;
    if(href.indexOf("?") != -1) {
        let query:string = href.substr(href.indexOf("?")+1);
        let parametersStr:string[] = query.split("&");
        parametersStr.forEach(p => {
          let ps = p.split("=");
          this.parameters[ps[0]] = ps[1];
        });

       this.lenderID = this.parameters["lenderid"]; 
    }
 }

  changeInterest(value : number) {
    this.interest = value; 
  }

  changeAmount(value: Number) {
    this.amount = value; 
  }
}
