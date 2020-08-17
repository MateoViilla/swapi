import { SnackBarService } from './../../services/snackbar/snack-bar.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private snackBarService: SnackBarService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        const message = error.message.toString();
        this.snackBarService.showError(message);

        return throwError(error);
      })
    // tslint:disable-next-line: no-any
    ) as Observable<HttpEvent<any>>;
  }
}
