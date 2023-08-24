import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrGenerationComponent } from './components/qr-generation/qr-generation.component';
import { StepsComponent } from './components/steps/steps.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GenerateQRService } from "./services/generate-qr.service";
import { QrInfoComponent } from './components/qr-generation/qr-info/qr-info.component';

@NgModule({
  declarations: [
    AppComponent,
    QrGenerationComponent,
    StepsComponent,
    QrInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GenerateQRService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
