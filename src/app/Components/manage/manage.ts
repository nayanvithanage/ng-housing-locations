import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { Housing } from '../../Interfaces/Ihousing';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  templateUrl: './manage.html',
  styleUrl: './manage.scss'
})
export class ManageComponent {
  housingList: Housing[] = [];
  selectedSection: 'list' | 'add' = 'list';

  constructor(private readonly http: HttpClient) {
    this.http.get<Housing[]>("http://localhost:5109/api/housing")
      .subscribe({
        next: (data) => this.housingList = data,
        error: (err) => {
          console.error('Failed to fetch housing data', err);
        }
      });
  }

  selectSection(section: 'list' | 'add') {
    this.selectedSection = section;
  }
}
