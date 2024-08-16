import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowService, TvShow } from '../../services/tv-show.service';

@Component({
  selector: 'app-update-tv-show',
  templateUrl: './update-tv-show.component.html'
})
export class UpdateTvShowComponent implements OnInit {
  tvShow: TvShow = {
    id: 0,
    name: '',
    favorite: false
  };

  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.tvShowService.getTvShow(id).subscribe((data) => {
        this.tvShow = data;
      });
    }
  }

  updateTvShow(): void {
    if (this.tvShow.name.trim()) {
      this.tvShowService.updateTvShow(this.tvShow).subscribe(() => {
        this.router.navigate(['/']);  // Navega de regreso a la lista de programas de TV
      });
    }
  }
}
