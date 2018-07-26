import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SearchbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule, AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
