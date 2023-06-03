import { Component, Input } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title! : string;
  
  isShow = false;

  onClick(){
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }
}
