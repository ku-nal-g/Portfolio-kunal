import { Injectable, signal } from '@angular/core';

export type ToastKind = 'success' | 'error';

export interface ToastItem {
  id: number;
  kind: ToastKind;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class Toast {
  private nextId = 0;
  private readonly items = signal<ToastItem[]>([]);

  readonly toasts = this.items.asReadonly();

  success(message: string, title = 'Success'): void {
    this.push('success', title, message);
  }

  error(message: string, title = 'Error'): void {
    this.push('error', title, message);
  }

  dismiss(id: number): void {
    this.items.update((list) => list.filter((t) => t.id !== id));
  }

  private push(kind: ToastKind, title: string, message: string): void {
    const id = ++this.nextId;
    this.items.update((list) => [...list, { id, kind, title, message }]);

    setTimeout(() => this.dismiss(id), 6000);
  }
}
