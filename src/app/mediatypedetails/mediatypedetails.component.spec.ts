import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatypedetailsComponent } from './mediatypedetails.component';

describe('MediatypedetailsComponent', () => {
  let component: MediatypedetailsComponent;
  let fixture: ComponentFixture<MediatypedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediatypedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediatypedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
