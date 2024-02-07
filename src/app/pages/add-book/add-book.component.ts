import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../../models/book';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [BookComponent, BookComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  constructor(private readonly booksService:BooksService){
    
  }

  public addBook(id_book:HTMLInputElement, inputTitle:HTMLInputElement, inputAutor: HTMLInputElement, inputTipo:HTMLInputElement, inputPrecio:HTMLInputElement, inputImagen:HTMLInputElement){
    let newBook:Book = {
      id_book: parseInt(id_book.value, 10),
      id_user: 0,
      title: inputTitle.value, 
      type: inputTipo.value, 
      author: inputAutor.value, 
      price: parseFloat(inputPrecio.value), 
      photo: inputImagen.value,
    };
    
    // this.booksService.addNewBook(newBook);

    this.booksService.addApi(newBook).subscribe((data) => {
      console.log(data);
    })
  }
  }

