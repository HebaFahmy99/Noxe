import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  MoviesList:Array<any> =[] 
  pageIndex:number = 0;  
  totalPages:number = 0; 
  term: string = '';
  constructor(private _MoviesService:MoviesService) { }
  GetNextPage():void{  
    this.pageIndex ++; 
    if(this.pageIndex < this.totalPages){ 
    this._MoviesService.GetAllMovies('movie',this.pageIndex).subscribe((data)=> 
    {  
      this.MoviesList = data.results   ;  
    })  
  }  
  else{ 
        this.pageIndex = this.totalPages
  }
  }
  GetPreviousPage():void{  
    this.pageIndex --; 
    if(this.pageIndex < this.totalPages && this.pageIndex > 0){ 
    this._MoviesService.GetAllMovies('movie',this.pageIndex).subscribe((data)=> 
    {  
      this.MoviesList = data.results   ;  
    })  
  }  
  else{ 
        this.pageIndex = 1
  }
  }
  ngOnInit(): void { 
    this._MoviesService.GetAllMovies('movie',1).subscribe((data)=> 
    { 
      this.MoviesList = data.results     
      this.totalPages = data.total_pages   
    })
  } 


}
