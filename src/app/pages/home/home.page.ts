import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.obtenerPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error al cargar datos');
      }
    );
  }
}
