import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  postFormData(data: { name: string; email: string; message: string }) {
    return this.http.post('https://portfolio-backend-sigma-pied.vercel.app/api/contact', data);
  }
}
