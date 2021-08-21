import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';
import { IFilms } from 'src/app/model/IFilms.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
results: Observable<IFilms>;
term = '';
  constructor(private filmService: FilmService) { }
  searchChanged() {
    this.results = this.filmService.getFilms(this.term);
  }
}