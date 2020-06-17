import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../services/omdb.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  imageUrl = 'http://image.tmdb.org/t/p/w342';
  movieId: any;
  movieObj: any = {};
  addedToFav = false;


  constructor(private activatedRoute: ActivatedRoute,
    private omdbService: OmdbService,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {
    this.getParamsFromRoutes();
    this.getMovieDetails();
  }

  private getParamsFromRoutes() {
    this.activatedRoute.queryParams.subscribe(data => {
      if (data['data']) {
        this.movieId = data['id'];
        this.addedToFav = data['data'];
      } else {
        this.movieId = data['id'];
      }
    })
  }

  private getMovieDetails() {
    this.omdbService.getMovieDetails(this.movieId).subscribe(response => {
      response.poster_path = this.imageUrl + response.poster_path;
      this.movieObj = response;
    });
  }

  public addToFavorites() {
    if (this.storageService.getStorage('movie')) {
      const moviesList = this.storageService.getStorage('movie');
      moviesList.push(this.movieObj);
      this.storageService.setStorage('movie', moviesList);
    } else {
      const moviesList = [];
      moviesList.push(this.movieObj);
      this.storageService.setStorage('movie', moviesList);
    }
    this.addedToFav = true;
  }

  public removeFromFavorites() {
    const movies = this.storageService.getStorage('movie');

    for (let i = 0; i < movies.length; i++) {
      // if (JSON.stringify(movies[i]) === JSON.stringify(this.responseObj)) {
      if (this.movieObj.id === movies[i].id) {
        movies.splice(i, 1);
      }
    }

    this.storageService.setStorage('movie', movies);
    this.addedToFav = false;
  }

}
