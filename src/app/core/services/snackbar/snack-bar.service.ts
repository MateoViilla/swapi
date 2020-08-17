import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showSnack(openingcrawl: string): void {
    swal.fire('Opening Crawl', openingcrawl, 'info');
    // this.snackBar.open(openingcrawl, null, {
    //   duration: 2000,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
  }

  showError(message: string): void {
    swal.fire('Error', message, 'error');
  }
}
