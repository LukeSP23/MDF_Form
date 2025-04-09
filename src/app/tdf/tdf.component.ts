import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  ValueChangeEvent,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'tdf',
  standalone: false,
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  form: FormGroup;
  // ({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   gender: new FormControl(''),
  //   age: new FormControl('')
  // });

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    });
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  get gender() {
    return this.form.get('gender') as FormControl;
  }

  get age() {
    return this.form.get('age') as FormControl;
  }
}
