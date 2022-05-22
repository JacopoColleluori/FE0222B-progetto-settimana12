import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataAuth } from 'src/app/models/dataauth';
import { Favorite } from 'src/app/models/favorite';
import { Movie } from 'src/app/models/movie';



@Injectable({
  providedIn: 'root',
})

export class MoviesService {
userData!:DataAuth;

  baseUrl = 'http://localhost:4201';

  constructor(private http: HttpClient) {
    const user=localStorage.getItem('user')
    if(!user){
      return
    }
     this.userData=JSON.parse(user)
  }




   getFavorites():Observable<Favorite[]>{          //chiamata per i favoriti in base all'id che si trova dentro al localStorage
    console.log( this.http.get<Favorite[]>(`${this.baseUrl}/favorites?userId=${this.userData.user.id}`))
    return this.http.get<Favorite[]>(`${this.baseUrl}/favorites?userId=${this.userData.user.id}`)
   }

  getMovies():Observable<Movie[]> {
    // console.log(localStorage.getItem("user"))                         Lascio questo pezzo di codice commentato per ricordarmi di essere più preciso
    // const user=JSON.parse(localStorage.getItem("user") ||'null');     quando scrivo le parole, accessToken con due c e non con una...
    // // if(!user){
    // //   return
    // // }
    // console.log(user)
    // const userData:DataAuth=user;
    // console.log(userData.accessToken)
    // const headers= new HttpHeaders().set('Authorization',`Bearer ${userData.accessToken}`);
    return  this.http.get<Movie[]>(`${this.baseUrl}/movies-popular`/*,{headers}*/);
  }
  deleteFavorite(favId:number){
     return this.http.delete(`${this.baseUrl}/favorites/${favId}`)
  }
  addFavorite(data:{movieId:number,userId:number}){
  return this.http.post<Favorite>(`${this.baseUrl}/favorites`,data)
  }
}
