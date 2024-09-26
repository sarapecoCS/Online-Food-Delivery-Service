import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { SastojciComponent } from './sastojci/sastojci.component';
import { RadniciComponent } from './radnici/radnici.component';
import { PitanjaComponent } from './pitanja/pitanja.component';
import { UplateComponent } from './uplate/uplate.component';
import { KuponiComponent } from './kuponi/kuponi.component';
import { FaqComponent } from './faq/faq.component';
import { IzvjestajiComponent } from './izvjestaji/izvjestaji.component';
import { DostaveComponent } from './dostave/dostave.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ProizvodiComponent,
    SastojciComponent,
    RadniciComponent,
    PitanjaComponent,
    UplateComponent,
    KuponiComponent,
    FaqComponent,
    IzvjestajiComponent,
    DostaveComponent,
    ChatComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]) 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
