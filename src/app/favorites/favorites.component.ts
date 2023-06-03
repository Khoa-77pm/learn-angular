import { Component, EventEmitter, Input, OnInit, Output,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  @Input('is-favorite') isFavorite?:boolean;
  @Output('my-change') change = new EventEmitter();

  ngOnInit(): void {
    console.log(this.isFavorite);
  }

  onClickFavor(){
    console.log("clicked favorite");
    this.isFavorite = !this.isFavorite;  
    this.change.emit({"isNewChange": this.isFavorite});
  }

}

export interface FavoriteChangeEventArg {
  isNewChange:boolean;
}
