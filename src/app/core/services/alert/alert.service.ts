import { Injectable } from '@angular/core';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
  ) { }

  showSnack(openingcrawl: string): void {
    swal.fire('Opening Crawl', openingcrawl, 'info');
  }

  showError(message: string): void {
    swal.fire('Error', message, 'error');
  }
}
