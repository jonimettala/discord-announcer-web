import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Message {
  content?: string;
  username?: string;
  embeds?: MessageEmbed[];
}

export interface MessageEmbed {
  title?: string;
  url?: string;
  description?: string;
  image?: MessageEmbedImage;
  fields?: MessageEmbedField[];
}

export interface MessageEmbedImage {
  url: string;
}

export interface MessageEmbedField {
  name?: string;
  value?: string;
}

@Injectable()
export class MessengerService {

  constructor(private http: HttpClient) { }

  send(url: string, message: Message) {
    this.http.post(url, message).subscribe(jsonObject => {
      console.log(jsonObject);
    }, error => this.handleError(error));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    window.alert('Failed to announce. Check your data.');
  }
}
