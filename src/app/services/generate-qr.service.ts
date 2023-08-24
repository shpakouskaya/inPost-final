import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { States } from "../shared/enums/states";
import { errorQR, SuccessGetPack } from "../shared/interfaces/qr-data";

@Injectable({
  providedIn: 'root'
})
export class GenerateQRService {
  mockDataSuccess: SuccessGetPack = {
    qrcode:'https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png',
    expirationDate: "2022-11-03 12:00",
    multicompartment :true,
    size: undefined,
  }

  constructor(
    private http: HttpClient
  ) {}

  fetchQRCode(code: string, state: number): Observable<any>{
    if(state === States.GetPack) {
      // comment to use mock data
      //return this.http.post('api/collection', code);

      return of(this.mockDataSuccess)
    }

    return this.http.post('api/return', code);
  }
}
