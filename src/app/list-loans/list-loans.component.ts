import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent implements OnInit {
parameters:Array<any>=new Array();
borrowerID:String;
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

       this.borrowerID = this.parameters["borrowerid"]; 
    }
  }

}
