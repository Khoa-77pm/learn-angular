import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isHeartFill') isHeartFill! : boolean;
  @Input('likeCount') likeCount!: number;
  
  onClickHeart(){
    this.isHeartFill = !this.isHeartFill;
    console.log(this.isHeartFill);
    this.isHeartFill? this.likeCount++ : this.likeCount--;
    
  }
}
