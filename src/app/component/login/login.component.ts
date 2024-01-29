import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginUser } from '../../models/loginUser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

    public user: LoginUser; 

    constructor() {
      this.user = new LoginUser();
    }

    public submit(form:NgForm) {
      console.log(form);
    }

    public hasUpperCase(text: string): boolean{
      for(let i= 0; i < text.length; i++){
        let asciiValue = text.charCodeAt(i);
        if(asciiValue >= 65 && asciiValue <=90){
          return true
        }
      }
      return false
    }
}
