import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { ReferenciaPipe } from '../../../pipes/referencia.pipe';
import { CardComponent } from '../../component/card/card.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, ReferenciaPipe, CardComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent { 
  public library: Book[] = [
    {id_book: 1,
    id_user: 1,
    title: "El temor de un hombre sabio",
    type: "Fantasía",
    author: "Patrick Rothfuss",
    price: 12,
    photo: "https://www.estudioenescarlata.com/media/img/portadas/_visd_0001JPG017HV.jpg"},

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
  ]

  public addBook(id_book:HTMLInputElement, inputTitle:HTMLInputElement, inputAutor: HTMLInputElement, inputTipo:HTMLInputElement, inputPrecio:HTMLInputElement, inputImagen:HTMLInputElement){
    let newBook:Book = {
      id_book: parseInt(id_book.value, 10),
      id_user: this.library.length + 1,
      title: inputTitle.value, 
      type: inputTipo.value, 
      author: inputAutor.value, 
      price: parseFloat(inputPrecio.value), 
      photo: inputImagen.value,
    };
    
    this.library.push(newBook);
  }

  public deleteBook(selectedBook:Book){
    this.library = this.library.filter(book => book.id_book !== selectedBook.id_book);
    console.log(this.library);
  }
  
}
