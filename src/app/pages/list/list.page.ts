import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';
import { IFilms } from 'src/app/model/IFilms.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
results: Observable<IFilms>;
term: string = '';

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  searchChanged(): void {
    this.results = this.filmService.getFilms(this.term);
  }
}