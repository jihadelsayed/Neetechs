import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './spinner/spinner.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { OpenAiComponent } from './open-ai/open-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    OpenAiComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
