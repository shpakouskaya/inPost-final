import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { GenerateQRService } from "../../services/generate-qr.service";
import { States } from "../../shared/enums/states";
import {errorQR, QRApiResponse, SuccessGetPack, SuccessSendPack} from "../../shared/interfaces/qr-data";

@Component({
  selector: 'app-qr-generation',
  templateUrl: './qr-generation.component.html',
  styleUrls: ['./qr-generation.component.scss']
})
export class QrGenerationComponent implements OnDestroy {
  statesEnum = States;
  activeState: number = States.GetPack;
  customerCode: string;
  qrcodeSubscription$: Subscription;
  QRData: QRApiResponse;
  error: errorQR | null;

  // mock data
  mockDataError: errorQR = {
    key: 'not found',
    msg: 'Błędny kod odbioru',
  }

  constructor(
    private qrCodeService: GenerateQRService
  ) {}

  getQR() {
    this.qrcodeSubscription$ = this.qrCodeService.fetchQRCode(this.customerCode, this.activeState).subscribe(
        data=> {
          // Handle result
          this.QRData = data;
        },
        error => {
          // use mock for error
          this.error = this.mockDataError;
        }
    )
  }

  setState(state: States) {
    this.activeState = state;
    console.log('this.activeState', this.activeState);
  }

  getCodeValue(e: any) {
    if(this.error) {
      this.error = null;
    }
    this.customerCode = e.target.value;
  }

  ngOnDestroy(){
    this.qrcodeSubscription$.unsubscribe();
  }
}
