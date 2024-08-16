import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { AddTvShowComponent } from './components/add-tv-show/add-tv-show.component';
import { UpdateTvShowComponent } from './components/update-tv-show/update-tv-show.component';

const routes: Routes = [
  { path: '', component: TvShowListComponent },
  { path: 'add', component: AddTvShowComponent },
  { path: 'update/:id', component: UpdateTvShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
