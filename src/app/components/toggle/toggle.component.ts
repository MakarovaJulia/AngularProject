import {ChangeDetectionStrategy, Component, forwardRef, Injectable, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})

@Injectable({
  providedIn: 'root'
})

export class ToggleComponent {

  private _value: boolean = false;

  public innerValue = new BehaviorSubject<boolean>(this._value);

  constructor() {
  }

  getState(): Observable<boolean> {
    return this.innerValue;
  };

  setState(value: boolean): void {
    if (value != this._value){
      this._value = value;
      this.innerValue.next(value)
    }
      console.log(this.innerValue)
    }
}
