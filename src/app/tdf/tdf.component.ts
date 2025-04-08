import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tdf',
  standalone: false,
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl('')
  });
}
