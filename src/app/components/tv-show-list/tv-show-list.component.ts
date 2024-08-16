import { Component, OnInit } from '@angular/core';
import { TvShowService, TvShow } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
})
export class TvShowListComponent implements OnInit {
  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.tvShowService.getTvShows().subscribe(data => {
      this.tvShows = data;
    });
  }

  deleteTvShow(id: number): void {
    this.tvShowService.deleteTvShow(id).subscribe(() => {
      this.tvShows = this.tvShows.filter(tv => tv.id !== id);
    });
  }
}
