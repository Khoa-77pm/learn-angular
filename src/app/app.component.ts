import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FavoriteChangeEventArg } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  courses = [
    {id:1,name:"Math"},
    {id:2,name:"Physical"},
    {id:3,name:"Biology"}
  ]
}
