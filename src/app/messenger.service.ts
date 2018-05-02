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
}

export interface MessageEmbedImage {
  url: string;
}

@Injectable()
export class MessengerService {

  constructor(private http: HttpClient) { }

  send(url: string, message: Message) {
    this.http.post(url, message).subscribe(jsonObject => {
      console.log(jsonObject);
    });
  }

}
