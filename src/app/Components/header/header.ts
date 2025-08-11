import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg" alt="Logo" aria-hidden="true">
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/manage">Manage</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    .brand-name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      background: #fff;
      border-bottom: 1px solid #eee;
    }
    .brand-logo {
      height: 40px;
      margin-right: 1rem;
    }
    .main-nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }
    .main-nav li {
      display: inline;
    }
    .main-nav a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .main-nav a:hover {
      background: #f0f0f0;
      color: #0078d4;
    }
  `
})
export class HeaderComponent {

}
