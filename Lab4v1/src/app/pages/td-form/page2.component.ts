import { Component, EventEmitter, Output } from '@angular/core';

interface User {
  name: string;
  age: number;
  phone: string;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component {
  @Output() userAdded = new EventEmitter<User>();
  users: User[] = [];
  model: User = { name: '', age: 0, phone: '' };

  onSubmit(form: any) {
    if (form.valid) {
      this.users.push({...this.model});
      this.userAdded.emit({...this.model});
      this.model = { name: '', age: 0, phone: '' };
      form.resetForm();
    }
  }
}
