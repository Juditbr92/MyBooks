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
    last_name: "Bardón Romero",
    email: "j123@gmail.com",
    photo: "https://www.google.es/url?sa=i&url=https%3A%2F%2Fmedinatusclasesmusical.art.blog%2F2020%2F01%2F14%2Fperfil-del-buen-lector%2F&psig=AOvVaw3iKuFkAwJSApSChYR3_sNP&ust=1704997596248000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMD_2r6704MDFQAAAAAdAAAAABAD",
    password: "abc123"
  }
  public changeName(input: HTMLInputElement){
    this.user.name = input.value;
    
  }

  public changeSurname(input: HTMLInputElement){
    this.user.last_name = input.value
  }

  public changeEmail(input: HTMLInputElement){
    this.user.email = input.value;
  }

  public changePhoto(input: HTMLInputElement){
    this.user.photo = input.value;
  }

}

