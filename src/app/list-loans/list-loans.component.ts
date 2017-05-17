import { Component, OnInit } from '@angular/core';
import {DataListModule} from 'primeng/primeng';
import {LoanResponse} from '../LoanResponse'; 
import {ApplicationService} from '../services/application.service'

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent implements OnInit {
loanResponses : LoanResponse[] = new Array(); 
parameters:Array<any>=new Array();
borrowerID:String;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    let href:string = document.location.href;
    if(href.indexOf("?") != -1) {
        let query:string = href.substr(href.indexOf("?")+1);
        let parametersStr:string[] = query.split("&");
        parametersStr.forEach(p => {
          let ps = p.split("=");
          this.parameters[ps[0]] = ps[1];
        });

       this.borrowerID = this.parameters["borrowerid"]; 
    }
    this.loanResponses = this.applicationService.getLoans(); 
  }

}
