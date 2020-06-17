import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../services/omdb.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  imageUrl = 'http://image.tmdb.org/t/p/w200';
  movies = [];
  favoritesMovies = [];
  showFavoritesMovies = false;

  constructor(private omdbService: OmdbService,
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.getFavoritesMovies();
    this.getMovies();
  }

  private getFavoritesMovies() {
    if (this.storageService.getStorage('movie')[0]) {
      this.showFavoritesMovies = true;
      this.favoritesMovies.push(this.storageService.getStorage('movie'));
    }
  }

  private getMovies() {
    this.omdbService.getMostPopularMovies().subscribe(response => {
      this.movies.push(response.results);
      this.movies[0].forEach(element => {
        element.poster_path = this.imageUrl + element.poster_path;
      });
    })
  }

  public imageClickedHandler(item: any) {
    const ids = [];
    if (this.favoritesMovies[0]) {
      this.favoritesMovies[0].forEach(element => {
        ids.push(element.id);
      });
    }

    if (ids.includes(item)) {
      this.router.navigate(['/movie-details'], { queryParams: { id: item, data: false } });
    } else {
      this.router.navigate(['/movie-details'], { queryParams: { id: item } });
    }
  }

  public imageClickedFromFavHandler(item: any) {
    if (item) {
      this.router.navigate(['/movie-details'], { queryParams: { id: item, data: false } });
    }
  }

}
