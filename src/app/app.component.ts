import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FavoriteChangeEventArg } from './favorites/favorites.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  task={
    task_id: "Daily run",
    assignee:{
      name:"Mac"
    }
  }

  task2={
    task_id: "Daily run",
    assignee:null
  }

}
