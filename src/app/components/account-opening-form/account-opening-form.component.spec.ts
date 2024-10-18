import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpeningFormComponent } from './account-opening-form.component';

describe('AccountOpeningFormComponent', () => {
  let component: AccountOpeningFormComponent;
  let fixture: ComponentFixture<AccountOpeningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountOpeningFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOpeningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
