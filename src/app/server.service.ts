import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IHeaderData} from '../interfaces/header-data';
import {UtilityService} from './utility.service';

import {_throw} from 'rxjs/observable/throw';
import {Observable} from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import {INote} from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient, private utilityService: UtilityService) {
  }

  createHeaders(headerData?: any): HttpHeaders {
    let headers = new HttpHeaders();

    if (headerData)
      for (let key in headerData) {
        {
          headers = headers.set(key, headerData[key]);
        }
      }
    return headers;
  }

  makeGetReq<T>(reqObj: { url: string, headerData?: any }): Observable<{ statusCode: string; description: string, body: T }> {
    let headers = this.createHeaders();
    return this.httpClient.get<{ statusCode: string; description: string, body: T }>(reqObj.url, {headers: headers})
      .pipe(catchError((e: any, caught: Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      }))
  }

  makePostReq<T>(reqObj: { url: string, body: any, headerData?: any }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.post<T>(reqObj.url, reqObj.body)
      .pipe(catchError((e: any, caught: Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      }))
  }

  makePutReq<T>(reqObj: { url: string, body: any, headerData?: IHeaderData }): Observable<T> {
    // let headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.put<T>(reqObj.url, reqObj.body)
      .pipe(catchError((e: any, caught: Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      }))
  }
}
