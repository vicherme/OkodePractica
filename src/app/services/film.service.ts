import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { IFilms } from '../model/IFilms.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
private url = '';
private apiKey = '6981c3c';

  constructor(private http: HttpClient) { }

  getFilms(title) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&apikey=${this.apiKey}`;
    return this.http.get<IFilms>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id) {
    return this.http.get<IFilms>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
