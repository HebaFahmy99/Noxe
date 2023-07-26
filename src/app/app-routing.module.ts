import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { MediatypedetailsComponent } from './mediatypedetails/mediatypedetails.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [  
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent,title:"Home"}, 
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent,title:"Movies"}, 
  {path:"details",canActivate:[AuthGuard],component:DetailsComponent,title:"Details"},  
  {path:"mediaTypeDetails/:id/:mediaType",canActivate:[AuthGuard],component:MediatypedetailsComponent,title:"Media Details"},  
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent,title:"People"},
  {path:"tvshows",canActivate:[AuthGuard],component:TvshowsComponent,title:"TvShows"}, 
  {path:"login",component:LoginComponent,title:"Login"}, 
  {path:"register",component:RegisterComponent,title:"Register"}, 
  {path:"**",component:NotfoundComponent,title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }