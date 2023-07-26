import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingsService } from './../trendings.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mediatypedetails',
  templateUrl: './mediatypedetails.component.html',
  styleUrls: ['./mediatypedetails.component.scss']
})
export class MediatypedetailsComponent implements OnInit {   
  CrewList:Array<any> = [];
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
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  itemDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute, private _TrendingsService:TrendingsService) { }

  ngOnInit(): void { 
    let {id, mediaType} = this._ActivatedRoute.snapshot.params;  
    console.log(id); 
    console.log(mediaType);
    
    
    this._TrendingsService.GetItemDetails(id,mediaType).subscribe((data)=> 
    { 
      this.itemDetails = data; 
    }) 

    if(mediaType == 'movie'){ 
      this._TrendingsService.GetCrew(id).subscribe((data)=>{ 
        this.CrewList = data.cast.filter((ele:any)=>ele.profile_path !== null);
      })
    }

    
    
  }

}
