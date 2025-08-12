import { Component, Input } from '@angular/core';
import { Housing } from '../../Interfaces/Ihousing';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
  <img class="listing-photo" [src]="'assets/'+housing.photo" alt="{{housing.name}} photo">
  <h2 class="listing-heading">{{housing.name}},{{housing.state}}</h2>
  <p class="listing-location"></p>
    </section>
  `,
  styles: `
    .listing {
    background: var(--accent-color);
    border-radius: 30px;
    padding-bottom: 30px;
  }
  .listing-heading {
    color: var(--primary-color);
    padding: 10px 20px 0 20px;
  }
  .listing-photo {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 30px 30px 0 0;
  }
  .listing-location {
    padding: 10px 20px 20px 20px;
  }
  .listing-location::before {
    content: url("/assets/location-pin.svg") / "";
  }

  section.listing a {
    padding-left: 20px;
    text-decoration: none;
    color: var(--primary-color);
  }
  section.listing a::after {
    content: "203A";
    margin-left: 5px;
  }`
})
export class HousingLocationComponent {
  @Input() housing!: Housing;
}
