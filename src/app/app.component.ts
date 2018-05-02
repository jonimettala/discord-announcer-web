import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discord Announcer';
  help = 'Help';
  helpLink = 'https://github.com/jonimettala/discord-announcer-web/wiki';
  changes = 'Change Log';
  changesLink = 'https://github.com/jonimettala/discord-announcer-web/releases';
}
