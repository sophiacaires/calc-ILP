import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  value1: number = 0;
  value2: number = 0;
  outcome: number = 0;
  historyState: boolean = false;

  onClickSum(){
    this.outcome=this.value1+this.value2;
  }

  onClickSubstract(){
    this.outcome=this.value1-this.value2;
  }

  onClickMultiply(){
    this.outcome=this.value1*this.value2;
  }

  onClickDivide(){
    this.outcome=this.value1/this.value2;
  }

  onClickClear(){
    this.value1 = 0;
    this.value2 = 0;
    this.outcome = 0;
  }

  onClickToggleHistory(){
    if (this.historyState == false){
      this.historyState = true;
    }else{
      this.historyState = false;
    }
  }
}
