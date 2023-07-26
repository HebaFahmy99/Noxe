import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { } 

  GetAllMovies(MediaType:string,pageIndex:number):Observable<any>{ 
    return this._HttpClient.get(`https://api.themoviedb.org/3/${MediaType}/popular?api_key=&page=${pageIndex}`)
  }
}
