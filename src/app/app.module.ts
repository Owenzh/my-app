import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root/app.component';
import { AppHeader } from './components/common/app.header/header.component';
import { AppContent } from './components/common/app.content/content.component';
import { AppFooter } from './components/common/app.footer/footer.component';
import { FuritListComponent } from './components/furit.list/furit.list.component';
import { FuritItemComponent } from './components/furit.item/furit.item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppContent,
    AppFooter,
    FuritListComponent,
    FuritItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
