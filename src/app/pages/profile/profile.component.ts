import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  public user: User = {
    Id_user: 1,
    name: "Judit",
    last_name: "Bardón",
    email: "j123@gmail.com",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScsD69qCqL-suNtMBeFwnPLmpSpw4nsbl0A&usqp=CAU",
    password: "abc123"
  }

    public changeData(inputName:HTMLInputElement, inputSurname:HTMLInputElement, inputEmail:HTMLInputElement, inputPhoto:HTMLInputElement){
      this.user.name = inputName.value, 
      this.user.last_name = inputSurname.value, 
      this.user.email = inputEmail.value,
      this.user.photo = inputPhoto.value
    }

  

}

