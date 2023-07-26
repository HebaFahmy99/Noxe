import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  ActorsList:Array<any> =[] 
  pageIndex:number = 0;  
  totalPages:number = 0; 
  term:string = '';
  constructor(private _MoviesService:MoviesService) { }
  GetNextPage():void{  
    this.pageIndex ++; 
    if(this.pageIndex < this.totalPages){ 
    this._MoviesService.GetAllMovies('person',this.pageIndex).subscribe((data)=> 
    {  
      this.ActorsList = data.results   ;  
    })  
  }  
  else{ 
        this.pageIndex = this.totalPages
  }
  }
  GetPreviousPage():void{  
    this.pageIndex --; 
    if(this.pageIndex < this.totalPages && this.pageIndex > 0){ 
    this._MoviesService.GetAllMovies('person',this.pageIndex).subscribe((data)=> 
    {  
      this.ActorsList = data.results   ;  
    })  
  }  
  else{ 
        this.pageIndex = 1
  }
  }
  ngOnInit(): void { 
    this._MoviesService.GetAllMovies('person',1).subscribe((data)=> 
    { 
      this.ActorsList = data.results     
      this.totalPages = data.total_pages   
    })
  }

}
