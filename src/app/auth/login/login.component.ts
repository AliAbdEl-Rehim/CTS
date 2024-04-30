import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showError: boolean = false; // This flag will control the display of the error popup

  constructor(private router: Router) {}

  onLogin() {
    // Hard-coded check for example purposes
    if (this.username !== 'user' || this.password !== 'password') {
      this.showError = true;
    } else {
      this.showError = false;
      // proceed with the login
      this.router.navigate(['/home']);
    }
  }

  closeError() {
    this.showError = false;
  }
}
