import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FavoriteChangeEventArg } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  viewMode = 'map'
}
