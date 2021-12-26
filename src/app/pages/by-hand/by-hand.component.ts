import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ToggleComponent} from "../../components/toggle/toggle.component";
import { FilmService } from '../../services/film.service';

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

  films$ = this.filmService.films$;

  constructor(private fb: FormBuilder, private filmService: FilmService) {
    this.formToggle = this.fb.group({
      toggle: [true]
    })
    this.formToggle.valueChanges.subscribe(res => {
        this.isFilmSearch = res.toggle;
      }
    )
    this.filmInfo = new FormGroup({
      name: new FormControl(""),
      year: new FormControl(null),
      info: new FormControl(""),
    })
    this.filmInfo.valueChanges.subscribe((v) => {
      console.log(v)
    })
  }

  ngOnInit(): void {
  }

  save(e:any):void{
    this.filmService.addFilm(this.filmInfo.value('name'),
      this.filmInfo.value('year'),
      this.filmInfo.value('info'))
    console.log("Фильм сохранен")
  }
}
