import { Component, OnInit } from '@angular/core';
import {MessengerService, Message} from '../messenger.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private messenger: MessengerService) { }

  url: string;
  content: string;
  username = '';

  ngOnInit() {
  }

  handleSend() {
    const message: Message = {
      content: this.content
    };
    if (this.username.length >= 2) {
      message.username = this.username;
    }
    console.log(message);
    this.messenger.send(this.url, message);
  }

}
