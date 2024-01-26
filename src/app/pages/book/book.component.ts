import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { ReferenciaPipe } from '../../../pipes/referencia.pipe';
import { CardComponent } from '../../component/card/card.component';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, ReferenciaPipe, CardComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent { 
  public books : Book[] = [];
  constructor( public readonly bookService: BooksService){

  }

  ngOnInit(){
    this.books = this.bookService.getAll();
  }

  public searchById(bookId: HTMLInputElement){
    if(bookId.value === ''){
      this.books = this.bookService.getAll()
    } else{
      this.books = this.bookService.getOne(Number(bookId.value))
    }
    console.log(bookId.value)
  }
}
