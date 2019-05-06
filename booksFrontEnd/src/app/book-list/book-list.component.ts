import { BookDetail } from './../shared/book-detail.model';
import { BookDetailsService } from './../shared/book-details.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private service: BookDetailsService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  onDelete(Id) {
    this.service.deleteBookDetail(Id)
      .subscribe(res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      })
  }

}
