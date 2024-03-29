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
  record: string = "";
  history: string[] = [];
  historyState: boolean = false;
  dinamicClass: string = 'hideHistory';

onClickSum() {
  this.outcome = this.value1 + this.value2;
  this.record = `${this.value1} + ${this.value2} = ${this.outcome}`;
  this.addRecord(this.record);
}

onClickSubstract() {
  this.outcome = this.value1 - this.value2;
  this.record = `${this.value1} - ${this.value2} = ${this.outcome}`;
  this.addRecord(this.record);
}

onClickMultiply() {
  this.outcome = this.value1 * this.value2;
  this.record = `${this.value1} * ${this.value2} = ${this.outcome}`;
  this.addRecord(this.record);
}

onClickDivide() {
  if (this.value1 == 0 || this.value2 == 0) {
    alert('Não é possível dividir 0 por 0!');
  } else {
    this.outcome = this.value1 / this.value2;
    this.record = `${this.value1} / ${this.value2} = ${this.outcome}`;
    this.addRecord(this.record);
  }
}

onClickClear() {
  this.value1 = 0;
  this.value2 = 0;
  this.outcome = 0;
}

onClickToggleHistory() {
  this.historyState == false ? this.dinamicClass = '' : this.dinamicClass = 'hideHistory';
  this.historyState = !this.historyState;
}

addRecord(record: string) {
  if (this.history.length >= 5) {
    this.history.pop();
  }
  this.history.unshift(record);
  console.log(this.history);
}
}
