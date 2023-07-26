import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrendingsService {

  constructor(private _HttpClient:HttpClient) { }  

  GetTrendings(mediaType:any):Observable<any>{ 
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=`)
  } 

  GetItemDetails(id:string,mediaType:string):Observable<any>{  
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=`)
  }

  GetCrew(id:string):Observable<any>{ 
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=`)
  }
}
