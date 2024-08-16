import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TvShowService, TvShow } from '../../services/tv-show.service';

@Component({
  selector: 'app-add-tv-show',
  templateUrl: './add-tv-show.component.html'
})
export class AddTvShowComponent {
  newTvShow: TvShow = {
    id: 0,
    name: '',
    favorite: false
  };

  constructor(private tvShowService: TvShowService, private router: Router) {}

  addTvShow(): void {
    if (this.newTvShow.name.trim()) {
      this.tvShowService.addTvShow(this.newTvShow).subscribe(() => {
        this.router.navigate(['/']);  // Navega de regreso a la lista de programas de TV
      });
    }
  }
}
