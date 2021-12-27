import {Component, forwardRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ByHandComponent} from "../by-hand/by-hand.component";
import {FilmService} from "../../services/film.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ByHandComponent),
      multi: true
    }
  ]
})
export class FilmInfoComponent implements OnInit {

  films$ = this.filmService.films$;
  filmInfo: FormGroup;
  id: number;

  constructor(private filmService: FilmService, private route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.params['id'];
    this.filmInfo = new FormGroup({
      name: new FormControl(this.filmService.getFilmById(this.id)?.name),
      year: new FormControl(this.filmService.getFilmById(this.id)?.year),
      info: new FormControl(this.filmService.getFilmById(this.id)?.information),
    })
  }

  ngOnInit(): void {
  }
}
