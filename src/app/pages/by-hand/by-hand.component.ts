import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
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
  filmInfo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formToggle = this.fb.group({
      toggle: [true]
    })
    this.formToggle.valueChanges.subscribe(res => {
        this.isFilmSearch = res.toggle;
      }
    )
    this.filmInfo = new FormGroup({
      name: new FormControl(null),
      year: new FormControl(null),
      info: new FormControl(null),
    })
    this.filmInfo.valueChanges.subscribe((v) => {
      console.log(v)
    })
  }

  ngOnInit(): void {
  }

  save():void{
    console.log("Сохранено")
  }
}
