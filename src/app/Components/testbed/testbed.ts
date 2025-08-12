import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-testbed',
  imports: [MatCardModule, 
    MatButtonModule,
    MatTabsModule
  ],
  templateUrl: './testbed.html',
  styleUrl: './testbed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestBedComponent {
 

}
