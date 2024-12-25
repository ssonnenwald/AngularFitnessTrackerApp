import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DateFormatterDirective } from '../../shared/directives/date-formatter/date-formatter';
import { PositiveDecimalDirective } from '../../shared/directives/positive-decimal/positive-decimal';

@Component({
  selector: 'app-profile',
  imports: [
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    DateFormatterDirective,
    PositiveDecimalDirective,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public email: WritableSignal<string> = signal<string>('');
  public dateOfBirth: WritableSignal<Date | null> = signal<Date | null>(null);
  public selectedGender: WritableSignal<string> = signal<string>('M');
}
