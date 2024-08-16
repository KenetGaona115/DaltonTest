import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TvShow {
  id: number;
  name: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private apiUrl = 'https://localhost:7060/api/TvShow';

  constructor(private http: HttpClient) { }

  getTvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(this.apiUrl);
  }

  getTvShow(id: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/${id}`);
  }

  addTvShow(tvShow: TvShow): Observable<TvShow> {
    return this.http.post<TvShow>(this.apiUrl, tvShow);
  }

  updateTvShow(tvShow: TvShow): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tvShow.id}`, tvShow);
  }

  deleteTvShow(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
