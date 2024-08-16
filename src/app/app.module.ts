import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTvShowComponent } from './components/add-tv-show/add-tv-show.component';
import { FormsModule } from '@angular/forms';
import { UpdateTvShowComponent } from './components/update-tv-show/update-tv-show.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowListComponent,
    AddTvShowComponent,
    UpdateTvShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())  // Aquí se configura el HttpClient con fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
