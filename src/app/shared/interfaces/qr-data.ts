export interface SuccessGetPack {
  "qrcode": string;
  "expirationDate": string;
  "multicompartment": boolean;
  "size": string | undefined;
}

export interface SuccessSendPack {
  "qrcode": string;
  "expirationDate": string;
  "size": string;
}

export interface errorQR {
  "key": string;
  "msg": string;
}

export type QRApiResponse = SuccessGetPack | SuccessSendPack;

