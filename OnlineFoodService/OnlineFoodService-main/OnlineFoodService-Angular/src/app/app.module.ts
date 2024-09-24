import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http'; // Ensure this import is present
import { FormsModule } from '@angular/forms'; // Ensure this import is present
import { DatePipe } from '@angular/common'; // Ensure this import is present

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     
    ]),
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
