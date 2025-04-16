
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  name: string;
  age: number;
  phone: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component {
  @Output() userAdded = new EventEmitter<User>();
  users: User[] = [];
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.users.push(newUser);
      this.userAdded.emit(newUser);
      this.userForm.reset();
    }
  }
}