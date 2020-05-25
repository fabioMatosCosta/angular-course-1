import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // EventEmitter should be imported from angular core, vsc will try to import from another place
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Input()
  cardIndex:number;

  @Output('courseSelected') // Angular assumes the name of the custom event is bellow, unless you write it like this, this still works
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed(){
    console.log("this button is working");
    this.courseEmitter.emit(this.course);
  }

  isImageVis(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    if(this.course.category === 'BEGINNER') return 'beginner' 
  }

}
