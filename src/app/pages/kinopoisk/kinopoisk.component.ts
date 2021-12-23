import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-kinopoisk',
  templateUrl: './kinopoisk.component.html',
  styleUrls: ['./kinopoisk.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.kinopoisk]': 'true'
  }
})
export class KinopoiskComponent {

  form: FormGroup;
  modalIsOpen: boolean = false;

  films$ = this.filmService.films$;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService
  ) {
    this.form = this.fb.group({
      searchInput: []
    });

    this.form.get('searchInput')!.valueChanges.subscribe(res => {
        this.filmService.searchFilm(res);
      });
  }

  formatValue(arr: any[], id:any): any {
    return arr.find(item => item.id === id);
  }

  openModal(): void {
    this.modalIsOpen = true;
    }

  delete():void{
    this.filmService.clean();
    this.form.get('searchInput')?.setValue('');
  }
}
