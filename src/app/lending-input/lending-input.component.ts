import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import {ApplicationService} from '../services/application.service'
import {DialogModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';


@Component({
  selector: 'app-lending-input',
  templateUrl: './lending-input.component.html',
  styleUrls: ['./lending-input.component.css']
})
export class LendingInputComponent implements OnInit {
display: boolean = false;
interest:Number;
amount:Number;
parameters:Array<any>=new Array();
lenderID:String;  
   constructor(private applicationService: ApplicationService, private confirmationService: ConfirmationService) {

   }

  async ngOnInit() {
    let response = await this.applicationService.getTest('http://lendafriend.azurewebsites.net/api/bcdb96fb-3452-46a8-b045-9f2c08e9f2f4/test'); 
    console.log(response);
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

    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to recklessy lend out your money?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }
}
