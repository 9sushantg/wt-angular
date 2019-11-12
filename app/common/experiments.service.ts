import {Injectable} from '@angular/core';
import {Experiment} from './experiment.model';

@Injectable()
export class ExperimentsService {
  private experiments: Experiment[] = [
    {name: 'ADBMS', description: 'Lab Faculty: AAG', completed:0},
    {name: 'Data Networks', description: 'Lab Faculty: PJS', completed:0},
    {name: 'Software Engineering', description: 'Lab Faculty: PMB', completed:0},
    {name: 'Operating Systems', description: 'Lab Faculty: AAG', completed:0},
    {name: 'Web Technology', description: 'Lab Faculty: SCP', completed:0}
  ];

  getExperiments(): Experiment[] {
    return this.experiments;
  };
}
