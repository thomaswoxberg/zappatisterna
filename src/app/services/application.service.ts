import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {LoanResponse} from '../LoanResponse'

@Injectable()
export class ApplicationService {

  constructor(private http: Http) {

  }

  public async getTest(endpoint: string) {
    let url = endpoint;
    
    try {
      let response = await this.http.get(url).toPromise();       
      return response.json(); 
    } 
    catch(error) {
      console.log(error); 
    }       
  }

  public getLoans() : LoanResponse[] {
    let loans : LoanResponse[] = new Array(); 
    loans.push(new LoanResponse(10000, 2.5, "Andreas Bergren", true, "person1")); 
    loans.push(new LoanResponse(1500, 15, "Magnus Crafoord", false, "person2")); 
    loans.push(new LoanResponse(2000, 0, "Julia Erkers", true, "person3")); 
    loans.push(new LoanResponse(1000, 0, "Johnny Yakoub", true, "person4")); 
    loans.push(new LoanResponse(5404, 1.457, "Thomas Woxberg", true, "person1")); 
    return loans; 
  }

}
