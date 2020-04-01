import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class OmdbService {
    constructor(private http: Http) {

    }

    getConfiguration() {
        const url = 'https://api.themoviedb.org/3/configuration?api_key=9061bb55427c181a181dce25bcb8dd0b';
        return this.http.get(url).pipe(map((response: Response) => {
            return response.json();
        }));
    }

    getSearchedMovie(title: String) {
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=9061bb55427c181a181dce25bcb8dd0b&query=' + title;
        return this.http.get(url).pipe(map((response: Response) => {
            return response.json();
        }));
    }

    getMostPopularMovies() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9061bb55427c181a181dce25bcb8dd0b';
        return this.http.get(url).pipe(map((response: Response) => {
            return response.json();
        }));
    }

    getMovieDetails(id: String) {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=9061bb55427c181a181dce25bcb8dd0b';
        return this.http.get(url).pipe(map((response: Response) => {
            return response.json();
        }));
    }
}