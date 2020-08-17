import { LoaderInterceptor } from './loader/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './error/error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
