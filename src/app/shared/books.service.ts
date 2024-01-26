import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [
    {
      id_book: 1,
      id_user: 1,
      title: "El temor de un hombre sabio",
      type: "Fantasía",
      author: "Patrick Rothfuss",
      price: 12,
      photo: "https://www.estudioenescarlata.com/media/img/portadas/_visd_0001JPG017HV.jpg"
    },

    {
      id_book: 2,
      id_user: 3,
      title: "Dime quien soy",
      type: "Novela histórica",
      author: "Julia Navarro",
      price: 20,
      photo: "https://m.media-amazon.com/images/I/81kuxmbIIiL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id_book: 3,
      id_user: 4,
      title: "1984",
      type: "Ciencia ficción",
      author: "George Orwell",
      price: 14,
      photo: "https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg"
    },
    {
      id_book: 4,
      id_user: 4,
      title: "Patria",
      type: "Novela histórica",
      author: "Fernando Aramburu",
      price: 17,
      photo: "https://m.media-amazon.com/images/I/71P6414BRDL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id_book: 5,
      id_user: 3,
      title: "El ruiseñor",
      type: "Novela histórica",
      author: "K. Hannah",
      price: 18,
      photo: "https://www.moitoconto.com/imagenes/9788466/978846633840.JPG"
    }
  ];

  public getAll(): Book[] {
    return this.books;
  }

  public addNewBook(newBook: Book) {
    this.books.push(newBook);
  }

  public getOne(bookId: number): Book[] | [] {
    const chosenBook = this.books.find((book) => book.id_book === bookId);
    if(chosenBook){
      return [chosenBook]
    } else{
      return []
    }
  }

  public editBook(book: Book) {
    const bookToModifyIndex = this.books.findIndex((currentBook) => currentBook.id_book === book.id_book);
    if (bookToModifyIndex !== -1) {
      this.books[bookToModifyIndex] = book;
    }
  }

  public delete(id_book: Number) : Boolean{
    const bookIndex = this.books.findIndex((book) => book.id_book === id_book);

    if (bookIndex !== -1){
      this.books.splice(bookIndex, 1);
      return true 
    }
    return false
  }

  constructor() { }
}
