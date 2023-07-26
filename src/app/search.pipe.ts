import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(List:any[],term:string): any[] {
  //   return List.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase())) 
    
  // }
  
  transform(List:any[],term:string,mediaType:string): any[] { 
    if(mediaType == 'movie'){ 
      return List.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase()) ) 
    }else{
      return List.filter((item)=> item.name.toLowerCase().includes(term.toLowerCase()) ) 
    }


    
    
  }
  
}

// ||   
// item.name.toLowerCase().includes(term.toLowerCase())