import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LendingInputComponent } from './lending-input/lending-input.component';
import {ListLoansComponent} from './list-loans/list-loans.component'

const appRoutes: Routes = [
  { path: 'lender', component: LendingInputComponent },
  { path: 'borrower', component: ListLoansComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LendingInputComponent, 
    ListLoansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { } 
