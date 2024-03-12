import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCalcComponent } from './form-calc/form-calc.component';
import { FormsModule } from '@angular/forms';
import { HistoryCalcComponent } from './history-calc/history-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCalcComponent,
    HistoryCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
