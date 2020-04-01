import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-result',
  templateUrl: './search-bar-result.component.html',
  styleUrls: ['./search-bar-result.component.scss']
})
export class SearchBarResultComponent implements OnInit {
  imageUrl = 'http://image.tmdb.org/t/p/w300';
  movieTitle: string;
  resultObj = [];

  constructor(private omdbService: OmdbService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getParamsFromRoutes();
    this.getSearchedMovie();
  }

  private getParamsFromRoutes() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.movieTitle = data['title'];
    });
  }

  private getSearchedMovie() {
    this.omdbService.getSearchedMovie(this.movieTitle).subscribe(response => {
      response.results.forEach(element => {
        element.poster_path = this.imageUrl + element.poster_path;
        this.resultObj.push(element);
      });
    });
  }

  public imageClickedHandler(item: any) {
    if (item) {
      this.router.navigate(['/movie-details'], { queryParams: { id: item } });
    }
  }
}
