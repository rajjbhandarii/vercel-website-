import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  users: any[] = [];
  private apiUrl = environment.apiUrl
  // serverAPI = 'https://testvercel-yn84.onrender.com/api/data';
  // localAPI = 'http://localhost:3000/api/data';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.users = data;
    });
  }

  deleteUser(user: any) {
    this.http.delete(this.apiUrl + '/' + user.id).subscribe(() => {
      this.fetchUser();
    });
  }
}