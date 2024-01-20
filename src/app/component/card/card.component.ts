import { Component, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookComponent } from '../../pages/book/book.component';
import { ReferenciaPipe } from '../../../pipes/referencia.pipe';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BookComponent, ReferenciaPipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public bookPhoto!: string;
  @Input() public bookTitle!: string;
  @Input() public bookId!: number;
  @Input() public bookAuthor!: string;
  @Input() public bookType!: string;
  @Input() public bookPrice!: number;

  @Output() selectBook = new EventEmitter<Book>();

  public getBook(){
    const selectedBook: Book = {
      photo: this.bookPhoto, 
      title: this.bookTitle, 
      id_book: this.bookId,  
      author: this.bookAuthor,
      type: this.bookType, 
      price: this.bookPrice
    }
    this.selectBook.emit(selectedBook);
  }
}
