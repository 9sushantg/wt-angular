import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit{
  title: string = 'About';
  body:  string = 'About the user.';
  message: string;
  message1: string;

  constructor(public _stateService: StateService) { }

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
