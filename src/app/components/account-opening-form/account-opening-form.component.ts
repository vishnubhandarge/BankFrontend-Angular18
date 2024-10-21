import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-account-opening-form',
  standalone: true, 
  imports: [RouterLink, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './account-opening-form.component.html',
  styleUrl: './account-opening-form.component.css'
})

export class AccountOpeningFormComponent implements OnInit {
  accountForm: FormGroup = new FormGroup({});
  http = inject(HttpClient);

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
      this.accountForm = this.fb.group({
        firstName: ['test', [Validators.required, Validators.maxLength(50)]],
        lastName: ['test', [Validators.required, Validators.maxLength(50)]],
        birthDate: ['2024-10-22', Validators.required],
        mobile: ['1234567890', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['abc@abc.com', [Validators.required, Validators.email, Validators.maxLength(100)]],
        houseNo: ['12', Validators.required],
        addressLine1: ['abc', [Validators.required, Validators.maxLength(100)]],
        addressLine2: ['abc', Validators.maxLength(100)],
        taluka: ['Latur', Validators.required],
        city: ['Latur', Validators.required],
        state: ['Maharashtra', Validators.required],
        country: ['India', Validators.required],
        pinCode: ['123456', [Validators.required, Validators.pattern('[0-9]{6}'), Validators.minLength(6)]],
        nomineeName: ['abc', Validators.required],
        relationWithNominee: ['Sister', Validators.required],
        nomineeDOB: ['2024-10-21', Validators.required],
        accountType: ['Savings', Validators.required]
      });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
      this.http.post("https://localhost:7093/api/Account/OpenAccount", this.accountForm.value).subscribe((res: any) => {
        if (res.result) {
          alert("Account opened successfullt");
        } else {
          alert("Account opening failed");
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
