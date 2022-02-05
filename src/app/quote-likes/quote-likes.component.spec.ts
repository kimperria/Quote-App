import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteLikesComponent } from './quote-likes.component';

describe('QuoteLikesComponent', () => {
  let component: QuoteLikesComponent;
  let fixture: ComponentFixture<QuoteLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
