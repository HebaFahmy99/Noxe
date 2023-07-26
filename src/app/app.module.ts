import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"; 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MediatypedetailsComponent } from './mediatypedetails/mediatypedetails.component';
import { SearchPipe } from './search.pipe';
import { ApiKeyInterceptor } from './api-key.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    NavbarComponent,
    TvshowsComponent,
    PeopleComponent,
    NotfoundComponent,
    MediatypedetailsComponent,
    SearchPipe
  ],
  imports: [
  BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),  
    CarouselModule, 
    FormsModule


  ],
  providers: [{ 
    provide:HTTP_INTERCEPTORS, 
    useClass:ApiKeyInterceptor, 
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
