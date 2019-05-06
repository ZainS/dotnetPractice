import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDetailsService } from './shared/book-details.service';
import { BookListComponent } from './book-list/book-list.component';
import { FullDetailsComponent } from './full-details/full-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookListComponent,
    FullDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
