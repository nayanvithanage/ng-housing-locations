import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `

    <app-header class="header"></app-header>
    
    <section class="content">
      <router-outlet></router-outlet>
    </section>
     
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
