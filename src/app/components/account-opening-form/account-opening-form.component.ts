import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-account-opening-form',
  standalone: true, imports: [RouterLink, ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './account-opening-form.component.html',
  styleUrl: './account-opening-form.component.css'
})

export class AccountOpeningFormComponent implements OnInit {
  accountForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      birthDate: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      houseNo: ['', Validators.required],
      addressLine1: ['', [Validators.required, Validators.maxLength(100)]],
      addressLine2: ['', Validators.maxLength(100)],
      taluka: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      nomineeName: ['', Validators.required],
      relationWithNominee: ['', Validators.required],
      nomineeDOB: ['', Validators.required],
      accountType: ['', Validators.required]
    });
  }
  ngOnInit(): void { } just: any;
  openAccountObj: any =
    {
      "firstName": "",
      "lastName": "",
      "birthDate": "",
      "mobile": "",
      "email": "",
      "houseNo": "",
      "addressLine1": "",
      "addressLine2": "",
      "taluka": "",
      "city": "",
      "state": "",
      "country": "",
      "pinCode": "",
      "nomineeName": "",
      "relationWithNominee": "",
      "nomineeDOB": "",
      "accountType": ""
    };
  http = inject(HttpClient); onSubmit() {
    this.http.post("https://localhost:7093/api/Account/OpenAccount", this.openAccountObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Account opened successfullt");
      } else {
        alert("Account opening failed");
      }
    });
  }
}
