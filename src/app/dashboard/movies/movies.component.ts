import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies!:Movie[]|undefined;
  sub!:Subscription;
  constructor(private movieSRV:MoviesService) { }

 ngOnInit(){
  this.sub=this.movieSRV.getMovies().subscribe(movies=>{
    this.movies=movies;
  })
  }

}
