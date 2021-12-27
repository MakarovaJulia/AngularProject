import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Film {
  image?: string;
  name: string;
  id: number;
  year: number;
  information: string;
  genre?: string;
}

const MockFilms: Array<Film> = [
  {
    name: 'Минари',
    year: 2020,
    id: 1,
    information: 'День летнего солнцестояния – древний праздник, который во всех культурах окутан мистическим ореолом.' +
      ' В отрезанном от цивилизованного мира шведском поселении в этот день проводятся уникальные обряды с многовековой традицией.' +
      ' Именно туда отправляется группа молодых американских студентов-антропологов, прихватив с собой девушку одного из них. ' +
      'Однако вскоре после прибытия друзья выясняют, что местные обряды далеко не безобидны.',
    image: '/assets/minari.svg',
    genre: 'Драма, Триллер, Фильм ужасов'
  },
  {
    name: 'Солнцестояние',
    year: 2019,
    id: 2,
    information: '1980-е годы. Семья корейских иммигрантов с двумя детьми переезжает из Калифорнии в Арканзас. ' +
      'Глава семейства купил тут участок земли и собирается заняться фермерством,' +
      ' но жизнь постоянно подкидывает молодой семье новые трудности.',
    image: '/assets/sun.svg',
    genre: 'Драма'
  },
  {
    name: 'Манк',
    year: 2020,
    id: 3,
    information: '1940 год. Нью-йоркский острослов Герман Манкевич, когда-то приехавший покорять Голливуд и в целом преуспевший,' +
      ' с переломами после автоаварии уединяется в домике посреди пустыни Мохаве. Он помещен в заточение продюсером Джоном Хаусменом' +
      ' и молодым режиссером Орсоном Уэллсом: Манк — так называют его друзья — должен всего за три месяца написать для Уэллса сценарий.' +
      ' А лучше бы за два. Манк вспоминает последние годы, проведённые в Голливуде,' +
      ' и переносит опыт личного общения с воротилами бизнеса в сценарий.',
    image: '/assets/mank.svg',
    genre: 'Драма, Кинокомедия'
  },
  {
    name: 'Девушка, подающая надежды',
    year: 2020,
    id: 4,
    information: 'Когда-то Кассандра училась в университете и подавала большие надежды,' +
      ' но теперь живёт с родителями и работает в кофейне. Девушка скрывает от близких, ' +
      'что по вечерам посещает бары и другие увеселительные заведения, где, притворяясь сильно пьяной,' +
      ' ведёт охоту на падких до беззащитных женщин мужчин. Вымещая злость на противоположном поле, ' +
      'таким образом Кассандра мстит за события студенческих лет.',
    image: '/assets/girl.svg',
    genre: 'Драма, Кинокомедия'
  },
  {
    name: 'Душа',
    year: 2020,
    id: 5,
    information: 'Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал' +
      ' выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание ' +
      'у легендарной саксофонистки и, возвращаясь домой вне себя от счастья, падает в люк и умирает. ' +
      'Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора ' +
      'и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей' +
      ' зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22,' +
      ' которая уже много веков не может найти свою искру и отправиться на Землю.',
    image: '/assets/soul.svg',
    genre: 'Драма, Кинокомедия, Приключения'
  },
  {
    name: 'Довод',
    year: 2020,
    id: 6,
    information: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии.' +
      ' Блокбастер-пазл Кристофера Нолана. ',
    image: '/assets/tenet.svg',
    genre: 'Фантастика, Боевик, Триллер'
  },

];

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films$: BehaviorSubject<Array<Film>> = new BehaviorSubject<Array<Film>>([]);
  id: number = 7;

  searchFilm(filmName: string): void {
    if (filmName.length < 1) {
      this.films$.next([]);
      return;
    }

    const value = MockFilms.filter(film => film.name.startsWith(filmName));

    this.films$.next(value);
  }

  constructor() {
  }

  clean():void{
    this.films$.next([]);
  }

  getFilmById(id:number): Film | undefined{
   return  MockFilms.find(film => film.id == id)
  }

  addFilm(name: string, year: string, information: string, genre?: string): void {
    MockFilms.push(
      {
        id: this.id,
        name: name,
        year: Number(year),
        information: information,
        genre: genre,
        image: "/assets/img/noMovie.svg"
      }
    )
    this.id++;
  }
}
