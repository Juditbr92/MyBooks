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
  public books: Book[] | [] = [];
  constructor(public readonly bookService: BooksService) {
    // this.books = this.bookService.getAll();
  }

  ngOnInit() {
    this.bookService.getAllApi().subscribe((data: any) => {
      console.log(data)
      this.books = data
    })
  }

  public searchById(id_book: HTMLInputElement) {
    if (id_book.value === '') {
      this.bookService.getAllApi().subscribe((data: any) => {
        console.log(data)
        this.books = data
      })
    } else {
      this.bookService.getOneApi(Number(id_book.value)).subscribe((data:any) => {
        console.log(data)
      this.books = [data]
      })
    }
  }

  public deleteBook(id_book: number) {
    console.log(id_book)
    this.bookService.deleteApi(id_book).subscribe((data) => {
      this.bookService.getAllApi().subscribe((data: any) => {
        console.log(data)

        this.books = data
      })
    }
    )
  }
}


// FUNCIONES SIN API: 

  // ngOnInit(){
  //   this.books = this.bookService.getAll();
  // }
  // 