import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'What are the Odds?';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(navigator.language);
  }
}
