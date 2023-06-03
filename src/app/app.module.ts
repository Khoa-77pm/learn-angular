import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Courses } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors/authors.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { BoardPanelComponent } from './board-panel/board-panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [AppComponent, Courses, CourseComponent, AuthorsComponent, SummaryPipe, FavoritesComponent, BoardPanelComponent, LikeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}