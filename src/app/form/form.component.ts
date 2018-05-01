import { Component, OnInit } from '@angular/core';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private messenger: MessengerService) { }

  url: string;
  content: string;

  ngOnInit() {
  }

  send() {
    console.log(this.url, this.content);
    this.messenger.send(this.url, this.content);
  }

}
