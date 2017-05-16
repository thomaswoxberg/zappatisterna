import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

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

}
