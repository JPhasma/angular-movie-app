import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '97f4a4a0dd6cc5bc8673df3268e4f042';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
