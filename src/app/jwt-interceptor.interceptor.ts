import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";


@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router)
    {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = sessionStorage.getItem('token');
    let req = request;

    if(token){
      req = request.clone({
        setHeaders:{
          Authorization: token
        }
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this._router.navigateByUrl('/');
        }

        return throwError(err);

      })
    );



    return next.handle(request);
  }
}
