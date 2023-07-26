import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TrendingsService } from '../trendings.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  
  trendingMovies:Array<any>=[]; 
  trendingPeople:Array<any>=[]; 
  trendingShows:Array<any>=[]; 

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 1000, 
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
  constructor(private _TrendingsService:TrendingsService) { }

  
  GetTrendings():void{ 

  }
  ngOnInit(): void { 

    this._TrendingsService.GetTrendings('movie').subscribe((data)=> { 
      this.trendingMovies = data.results;})

    this._TrendingsService.GetTrendings('person').subscribe((data)=>{ 
      this.trendingPeople = data.results.filter((item:any)=> item.profile_path !== null)
    })

    this._TrendingsService.GetTrendings('tv').subscribe((data)=> { 
      this.trendingShows = data.results;})
    

  }

}
