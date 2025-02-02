import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  users: any[] = [];

  serverAPI = 'https://testvercel-yn84.onrender.com/api/data';
  localAPI = 'http://localhost:3000/api/data';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.http.get(this.serverAPI).subscribe((data: any) => {
      this.users = data;
    });
  }

  deleteUser(user: any) {
    this.http.delete(this.serverAPI + '/' + user.id).subscribe(() => {
      this.fetchUser();
    });
  }
}