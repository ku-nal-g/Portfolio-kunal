import { Component, inject } from '@angular/core';
import { Toast } from '../../services/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class ToastContainer {
  protected readonly toast = inject(Toast);

  protected dismiss(id: number): void {
    this.toast.dismiss(id);
  }
}
