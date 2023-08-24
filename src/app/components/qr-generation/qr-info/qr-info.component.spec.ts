import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrInfoComponent } from './qr-info.component';

describe('QrInfoComponent', () => {
  let component: QrInfoComponent;
  let fixture: ComponentFixture<QrInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrInfoComponent]
    });
    fixture = TestBed.createComponent(QrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
