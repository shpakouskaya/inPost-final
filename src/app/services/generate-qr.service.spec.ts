import { TestBed } from '@angular/core/testing';
import { GenerateQRService } from "./generate-qr.service";

describe('GenerateQrService', () => {
  let service: GenerateQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
