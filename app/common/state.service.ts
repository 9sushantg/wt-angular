import {Injectable} from '@angular/core';

@Injectable()
export class StateService {
  private _message = '';
  private _message1 = '';

  getMessage(): string {
    return this._message;
  };

  getMessage1(): string {
    return this._message1;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

  setMessage1(newMessage: string): void {
    this._message1 = newMessage;
  };
}
