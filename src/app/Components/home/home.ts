import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { Housing } from '../../Interfaces/Ihousing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule, HttpClientModule],
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>

    </section>
    <section class="results">
      <app-housing-location *ngFor="let housing of housingList" [housing]="housing"></app-housing-location>
    </section>
  `,
  styles: `
    .results {
    display: grid;
    column-gap: 14px;
    row-gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
    margin-top: 50px;
    justify-content: space-around;
  }

  input[type="text"] {
    border: solid 1px var(--primary-color);
    padding: 10px;
    border-radius: 8px;
    margin-right: 4px;
    display: inline-block;
    width: 30%;
  }

  button {
    padding: 10px;
    border: solid 1px var(--primary-color);
    background: var(--primary-color);
    color: white;
    border-radius: 8px;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    .results {
        grid-template-columns: repeat(2, 1fr);
    }
    input[type="text"] {
        width: 70%;
    }   
  }

  @media (max-width: 499px) {
    .results {
        grid-template-columns: 1fr;
    }    
  }`
})
export class HomeComponent {
  housingList: Housing[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Housing[]>("http://localhost:5109/api/housing")
      .subscribe({
        next: (data) => this.housingList = data,
        error: (err) => {
          console.error('Failed to fetch housing data', err);
        }
      });
  }
}
