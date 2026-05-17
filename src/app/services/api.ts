import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  toastr = inject(ToastrService);

  constructor(private http: HttpClient) { }

  postFormData(data: any) {
    return this.http.post('https://portfolio-backend-sigma-pied.vercel.app/api/contact', data);
  }
  showSuccess() {
    this.toastr.success('Form submitted successfully!', 'Success');
  }
  showError() {
    this.toastr.error('Failed to submit the form. Please try again.', 'Error');
  }
}
