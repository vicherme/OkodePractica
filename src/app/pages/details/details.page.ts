import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute } from '@angular/router';
import { IFilms } from 'src/app/model/IFilms.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  content: IFilms;
  constructor (private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getDetails(id).subscribe(result => this.content = result);
  }
  
}