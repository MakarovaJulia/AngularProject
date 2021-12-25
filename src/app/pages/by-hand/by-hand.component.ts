import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ToggleComponent} from "../../components/toggle/toggle.component";

@Component({
  selector: 'app-by-hand',
  templateUrl: './by-hand.component.html',
  styleUrls: ['./by-hand.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ByHandComponent implements OnInit {
  isFilmSearch: boolean = true;

  formToggle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formToggle = this.fb.group({
      toggle: [true]
    })
    this.formToggle.valueChanges.subscribe(res => {
        this.isFilmSearch = res.toggle;
      }
    )
  }

  ngOnInit(): void {
  }

}
