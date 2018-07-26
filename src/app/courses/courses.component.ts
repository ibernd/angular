import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  title ="List of courses";
  courses;

  constructor(private service: CoursesService) { }

  getTitle(){
    return this.title;
  }

  getCourses(){
    this.courses = this.service.getCourses();
  }


  ngOnInit() {
    this.getCourses();
  }

}
