import { CommonModule, JsonPipe } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-opening-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe, FormsModule, CommonModule],
  templateUrl: './account-opening-form.component.html',
  styleUrl: './account-opening-form.component.css'
})
export class AccountOpeningFormComponent {


}


