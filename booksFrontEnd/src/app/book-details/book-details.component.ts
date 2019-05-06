import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from './../shared/book-details.service';
import { NgForm } from '@angular/forms';
import { BookDetail } from './../shared/book-detail.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  selectedBook: BookDetail;

  constructor(private service:BookDetailsService) { }

  ngOnInit() {
    
  }

  onSubmit(form:NgForm){
    this.service.postBookDetails(form.value).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  getInfo(id){
    var url = 'https://localhost:44376/api/books/' + id
    window.open(url, '_blank');
  }

}
