import {
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  console.log('\u001b[1;32m Interceptor Log:  \u001b[1;37m', req.url);

  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log(
          '\u001b[1;32m Interceptor Log:  \u001b[1;37m',
          req.url,
          'returned a response with status',
          event.status
        );
      }
    })
  );
};
