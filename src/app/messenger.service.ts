import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MessengerService {

  constructor(private http: HttpClient) { }

  send(url: string, content: string): void {
    this.http.post(url, {'content': content}).subscribe(jsonObject => {
      console.log(jsonObject);
    });
  }

}
