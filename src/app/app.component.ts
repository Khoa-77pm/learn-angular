import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FavoriteChangeEventArg } from './favorites/favorites.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses: { id: number; name: string; }[] | undefined;

  trackCourse(index: number,course: { id: number; name: string; }){
    return course ? course.id : undefined;
  } 
  
  load(){
    this.courses = [
      {id:1,name:"Math"},
      {id:2,name:"Physical"},
      {id:3,name:"Biology"}
    ]
  }
}
