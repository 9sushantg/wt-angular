import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Experiment} from '../common/experiment.model';
import {ExperimentsService} from '../common/experiments.service';
import {StateService} from '../common/state.service';
import {ExperimentDetailComponent} from './experiment-details/experiment.detail.component';

@Component({
  selector: 'experiments',
  template: require('./experiments.component.html'),
  directives: [ExperimentDetailComponent]
})
export class ExperimentsComponent implements OnInit {
  title: string = 'Experiments';
  body: string = 'This page maintains the count of number of experiments completed of each subject. When you tap on the subject name, the number will increase, which indicates the count of experiments successfully completed.';
  message: string;
  experiments: Experiment[];

  constructor(
    private _stateService: StateService,
    private _experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experiments = this._experimentsService.getExperiments();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
