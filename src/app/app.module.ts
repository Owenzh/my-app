import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root/app.component';
import { AppHeader } from './components/common/app.header/header.component';
import { AppContent } from './components/common/app.content/content.component';
import { AppFooter } from './components/common/app.footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppContent,
    AppFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
