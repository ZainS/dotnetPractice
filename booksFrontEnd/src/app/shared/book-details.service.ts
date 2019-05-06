import { BookDetail } from './book-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  formData: BookDetail;
  readonly rootURL = "https://localhost:44376/api/books";
  list: BookDetail[];
  
  constructor(private http:HttpClient) { }

  postBookDetails(formData:BookDetail){
    return this.http.post(this.rootURL,formData);
  }

  deleteBookDetail(id) {
    return this.http.delete(this.rootURL +"/"+ id);
  }
  
  getdetails(id){
    return this.http.get(this.rootURL+"/"+id)
  }

  refreshList(){
    this.http.get(this.rootURL)
    .toPromise()
    .then(res => this.list = res as BookDetail[]);
  }
}
