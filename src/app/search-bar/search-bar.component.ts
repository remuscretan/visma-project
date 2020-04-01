import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  movieTitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(title: string) {
    if (title) {
      this.router.navigate(['/search-result'], { queryParams: { title: title } });
    }
  }
}
