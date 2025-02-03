import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  serverAPI = 'https://testvercel-yn84.onrender.com/api/data';
  localAPI = 'http://localhost:3000/api/data';
  user = {
    name: '', email: ''
  };

  constructor(private http: HttpClient) {
    console.log("hi this work")
  }

  onSubmit() {
    if (this.user.name && this.user.email) {
      const apiUrl = this.serverAPI; // Ideally, use an environment variable
      this.http.post(apiUrl, this.user).subscribe({
        next: () => {
          alert('User data saved!');
        },
        error: (error) => {
          console.error('Error saving user data', error);
          alert('Failed to save user data. Please try again.');
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
}
