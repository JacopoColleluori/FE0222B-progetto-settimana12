import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataAuth } from 'src/app/models/dataauth';
import { Movie } from 'src/app/models/movie';



@Injectable({
  providedIn: 'root',
})

export class MoviesService {

  baseUrl = 'http://localhost:4201';

  constructor(private http: HttpClient) {}


//  headerChange() {
//     const user:string|null= localStorage.getItem("user");
// }

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
}
