import { Component, Input } from '@angular/core';
import { QRApiResponse } from "../../../shared/interfaces/qr-data";

@Component({
  selector: 'app-qr-info',
  templateUrl: './qr-info.component.html',
  styleUrls: ['./qr-info.component.scss']
})
export class QrInfoComponent {
  @Input() QRInfo: QRApiResponse;

  get isSuccessGetPack() {
    return "multicompartment" in this.QRInfo;
  }

  get isSuccessSendPack() {
    return "size" in this.QRInfo;
  }
}
