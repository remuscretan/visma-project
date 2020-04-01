import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarResultComponent } from './search-bar/search-bar-result/search-bar-result.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'movie-details', component: MovieDetailsComponent},
  {path: 'search', component: SearchBarComponent},
  {path: 'search-result', component: SearchBarResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, MovieDetailsComponent, SearchBarComponent, SearchBarResultComponent]
