import { Component, OnInit, Input } from '@angular/core';
import { BookDetail } from './../shared/book-detail.model';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.css']
})
export class FullDetailsComponent implements OnInit {

  @Input() bookDetail: BookDetail;
  
  constructor() { }

  ngOnInit() {
  }

}
