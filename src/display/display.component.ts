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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.http.get('http://localhost:3000/api/data').subscribe((data: any) => {
      this.users = data;
    });
  }

  deleteUser(user: any) {
    this.http.delete(`http://localhost:3000/api/data/${user.id}`).subscribe(() => {
      this.fetchUser();
    });
  }
}