import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { LendingInputComponent } from './lending-input/lending-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LendingInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { } 
