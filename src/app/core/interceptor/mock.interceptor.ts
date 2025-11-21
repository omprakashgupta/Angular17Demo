import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('/api/products')) {
    const mockResponse = [
      { id: 1, name: 'Mock Phone', price: 999 },
      { id: 2, name: 'Mock Laptop', price: 2499 }
    ];
    return of(new HttpResponse({ status: 200, body: mockResponse }));
  }

  return next(req);
};
