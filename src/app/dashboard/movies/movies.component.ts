import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataAuth } from 'src/app/models/dataauth';
import { Favorite } from 'src/app/models/favorite';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  baseUrl = 'http://localhost:4201';
  favs!: any[];
  movies: any[] = [];
  moviesFav!: any[];
  sub!: Subscription;
  constructor(private movieSRV: MoviesService, private http: HttpClient) {}

  ngOnInit() {
    this.sub = this.movieSRV.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(this.movies);
    });

    this.sub = this.movieSRV.getFavorites().subscribe((res) => {
      this.favs = res;
      console.log(this.favs);
      this.moviesFav = this.movies.map((movie) => ({
        data: movie,
        favLoading: false,
        favId: this.favs.find((fav) => fav.movieId == movie.id)?.id,
      }));
      console.log(this.moviesFav);
    });
  }
  removeLike(favId: number, id: number) {
    console.log(favId)
    console.log(id)
  this.movieSRV.deleteFavorite(favId).subscribe(r=>{
    this.moviesFav[id].favLoading=true;
    this.moviesFav[id].favId=undefined;
    this.moviesFav[id].favLoading=false;
  }

  )

  }
  addLike(movieId: number, id: number) {
    let userId:number=this.movieSRV.userData.user.id;
    console.log(userId)
    let data={movieId,userId}
    console.log(data)
     this.movieSRV.addFavorite(data).subscribe(r=>{
      this.moviesFav[id].favLoading=true;
      this.moviesFav[id].favId=r.id;
      this.moviesFav[id].favLoading=false;
     })
  }
}
