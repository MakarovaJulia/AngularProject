import {ChangeDetectionStrategy, Component, forwardRef, Injectable, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {BehaviorSubject} from "rxjs";

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

export class ToggleComponent implements ControlValueAccessor {

  public _value: boolean = false;
  innerValue$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._value);

  onChangeCallback = (v:any) => {};
  onTouchedCallback = () => {};

  constructor() {
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: boolean): void {
    if (value !== this._value) {
      this._value = value;
    }
  }

  toggle(value: boolean): void {
    if (value !== this._value) {
      this._value = value;
      this.onChangeCallback(value);
      this.onTouchedCallback();
      console.log(this.innerValue$)
    }
  }
}
