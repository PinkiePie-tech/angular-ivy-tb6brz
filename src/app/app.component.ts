import { Component } from '@angular/core';
import { KitsuService } from './services/kitsu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private kitsuService: KitsuService) {}
}
