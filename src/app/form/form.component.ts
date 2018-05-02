import { Component, OnInit } from '@angular/core';
import {MessengerService, Message, MessageEmbed} from '../messenger.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private messenger: MessengerService) { }

  // Message general data
  url: string;
  content = '';
  username = '';

  // Message embed data
  embeds = false;
  embedTitle = '';
  embedUrl = '';
  embedDescription = '';
  embedImageUrl = '';

  ngOnInit() {
  }

  handleSend() {
    const message: Message = {};
    if (this.content.length > 0) {
      message.content = this.content;
    }
    if (this.username.length >= 2) {
      message.username = this.username;
    }

    if (this.embeds) {
      const embedData: MessageEmbed = {};
        if (this.embedTitle.length > 0) {
          embedData.title = this.embedTitle;
        }
      if (this.embedTitle.length > 0 && this.embedUrl.length > 0) {
        embedData.url = this.embedUrl;
      }
      if (this.embedDescription.length > 0) {
          embedData.description = this.embedDescription;
      }
      if (this.embedImageUrl.length > 0) {
          embedData.image = {url: this.embedImageUrl};
      }
      message.embeds = [embedData];
    }

    console.log(message);
    this.messenger.send(this.url, message);
  }

}
