import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../../models/book';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {

  constructor(private readonly booksService: BooksService){
    
  }
  
  public modifyBook(id_book:HTMLInputElement, inputTitle:HTMLInputElement, inputAuthor:HTMLInputElement, inputType:HTMLInputElement, inputPrice:HTMLInputElement, inputImg:HTMLInputElement){
    let newBook:Book = {
      id_book: parseInt(id_book.value, 10),
      id_user: 0,
      title: inputTitle.value, 
      type: inputType.value, 
      author: inputAuthor.value, 
      price: parseFloat(inputPrice.value), 
      photo: inputImg.value,
    };

    this.booksService.editBook(newBook);
  }

}

