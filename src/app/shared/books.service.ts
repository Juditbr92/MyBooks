import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ThisReceiver } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http: HttpClient) { }

  private books: Book[] = [
  ];

  // FUNCIONES SIN API: 

  // public getAll(): Book[] {
  //   return this.books;
  // }

  // public addNewBook(newBook: Book) {
  //   this.books.push(newBook);
  // }

  // public getOne(bookId: number): Book[] | [] {
  //   const chosenBook = this.books.find((book) => book.id_book === bookId);
  //   if(chosenBook){
  //     return [chosenBook]
  //   } else{
  //     return []
  //   }
  // }

  // public editBook(book: Book) {
  //   const bookToModifyIndex = this.books.findIndex((currentBook) => currentBook.id_book === book.id_book);
  //   if (bookToModifyIndex !== -1) {
  //     this.books[bookToModifyIndex] = book;
  //   }
  // }
// 
  // public delete(id_book: Number) : Boolean{
  //   const bookIndex = this.books.findIndex((book) => book.id_book === id_book);
// 
  //   if (bookIndex !== -1){
  //     this.books.splice(bookIndex, 1);
  //     return true  
  //   }
  //   return false
  // }
// 
  private url: string = 'http://localhost:3000'

  public getAllApi(){
    return this.http.get(`${this.url}/books`)
  }

  public getOneApi(id_book: number) : Observable <Object> {
    const chosenBook = this.books.find((book) => book.id_book === id_book);
    if(chosenBook){
      return this.http.get(`${this.url}/books?id_book=${id_book}`)
    } else{
      return this.http.get(`${this.url}/books`)
    }
  }

  public addApi(book: Book) {
    return this.http.post(`${this.url}/books`, book)
  }

  public editApi(book: Book) {
    return this.http.put(`${this.url}/books?id_book=${book.id_book}`, book)
  }

  public deleteApi(id_book: number) {
    return this.http.delete(`${this.url}/books?id_book=${id_book}`)
  }
}
