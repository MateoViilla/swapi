import { tap } from 'rxjs/operators';
import { LoaderService } from './../../services/loader/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  constructor(
    private loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.showLoader();
    }
    return next.handle(request).pipe(
      // tslint:disable-next-line: no-any
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.onEnd();
          }
        }
      },
        (err: HttpErrorResponse) => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.onEnd();
          }
        }));
  }

  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}
