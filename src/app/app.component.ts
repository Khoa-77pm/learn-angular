import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FavoriteChangeEventArg } from './favorites/favorites.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  removeCourse(course: { id: number; name: string }) {
    let index = this.courses.indexOf(course);    
    this.courses.splice(index,1);
  }
  addCourse() {
    this.courses.push({id:10,name:"New course"})
  }
  courses = [
    { id: 1, name: "Math" },
    { id: 2, name: "Physical" },
    { id: 3, name: "Biology" },
  ];
}
