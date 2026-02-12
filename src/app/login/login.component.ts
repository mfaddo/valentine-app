import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   username = '';
  password = '';
  error = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'Marooshty' && this.password === '1234') {
      this.router.navigate(['/valentine']);
    } else {
      this.error = true;
    }
  }

}
