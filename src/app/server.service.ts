import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IHeaderData} from '../interfaces/header-data';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient:HttpClient ) { }

  createHeaders(headerData?:any):HttpHeaders{
    let headers = new HttpHeaders();

    if(headerData)
      for(let key in headerData){{
        headers = headers.set(key, headerData[key]);
      }}
    return headers;
  }

  makeGetReq<T>(reqObj: {url:string, headerData?:any}): Observable<T>{
    let headers = this.createHeaders();
    return this.httpClient.get<T>(reqObj.url, {headers: headers});
  }
  makePostReq<T>(reqObj: {url:string, body:any, headerData?:any}): Observable<T>{
    let headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.post<T>(reqObj.url, reqObj.body);
  }

  makePutReq<T>(reqObj: {url:string, body:any, headerData?:IHeaderData}): Observable<T>{
    let headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.put<T>(reqObj.url, JSON.stringify(reqObj.body), {headers:headers});
  }
}
