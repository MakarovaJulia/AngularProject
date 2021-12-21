import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

interface Option<T = string> {
  label: string;
  value: T
}

export const Genres: Array<Option> = [
  {
      label: 'Комедия',
      value: 'comedy'
  },
  {
    label: 'Боевик',
    value: 'action'
  },
  {
    label: 'Нуар',
    value: 'noir'
  },
  {
    label: 'Фантастика',
    value: 'fantasy'
  },
]

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenreSearchComponent),
      multi: true
    }
  ]
})
export class GenreSearchComponent implements ControlValueAccessor {

  @Input() placeholder: string = 'Жанр';

  inputSearch: FormControl = new FormControl('');

  genres: Array<Option> = [];

  overlayIsOpen: boolean = false;

  selected: Array<Option> = [];

  overlayPositions: any

  onChangeCallback = (v:any) => {}
  onTouchedCallback = () => {}

  constructor() {
    this.inputSearch.valueChanges.subscribe(value => {
      if (!value || value.length < 1) {
        this.genres = [];
        this.overlayIsOpen = false;
        return;
      }

        this.genres = Genres.filter(item => item.label.startsWith(value));
        this.overlayIsOpen = true;
    })
  }

  removeGenre(genre: Option): void {
      this.selected = this.selected.filter(item => item.value !== genre.value);
  }


  selectGenre(genre: Option): void{
      this.selected.push(genre);
      this.overlayIsOpen = false;

      this.onChangeCallback(this.selected);
      this.onTouchedCallback();
  }

  close(): void{
    this.overlayIsOpen = false;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: Array<Option>): void {
    if (value !== this.selected){
      this.selected = value;
    }
  }
}
