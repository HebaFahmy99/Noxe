import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  tvList:Array<any> =[] 
  pageIndex:number = 0;  
  totalPages:number = 0; 
  term:string = '';
  constructor(private _MoviesService:MoviesService) { }
 
  GetNextPage():void{  
    this.pageIndex ++; 
    if(this.pageIndex < this.totalPages){ 
    this._MoviesService.GetAllMovies('tv',this.pageIndex).subscribe((data)=> 
    {  
      this.tvList = data.results   ;  
    })  
  }  
  else{ 
        this.pageIndex = this.totalPages
  }
  }
  GetPreviousPage():void{  
    this.pageIndex --; 
    if(this.pageIndex < this.totalPages && this.pageIndex > 0){ 
    this._MoviesService.GetAllMovies('tv',this.pageIndex).subscribe((data)=> 
    {  
      this.tvList = data.results   ;  
    })  
  }  
  else{ 
        this.pageIndex = 1
  }
  }


  ngOnInit(): void { 
    this._MoviesService.GetAllMovies('tv',1).subscribe((data)=> 
    { 
      this.tvList = data.results     
      this.totalPages = data.total_pages   
    })
  }

}
