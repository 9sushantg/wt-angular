import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'KJSCE Comps B | B1';
  body:  string = 'Keep track of number of experiments performed in all the subjects of Semester 5';
  message: string;
  message1: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this.message1 = this._stateService.getMessage1();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }

  updateMessage1(m: string): void {
    this._stateService.setMessage1(m);
  }
}
