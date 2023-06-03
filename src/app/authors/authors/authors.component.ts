import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors:any;
  constructor(private authorService: AuthorService){
    this.authors = authorService.getAuthors();

  }


}
