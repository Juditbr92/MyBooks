import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})

export class FormRegisterComponent {
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required), 
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]), 
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  public handleSubmit(): void{
    console.log(this.registerForm.value)
    console.log(this.registerForm)
    console.log('Errores de contraseña:', this.registerForm.get('password')?.errors);
  }

  
}
