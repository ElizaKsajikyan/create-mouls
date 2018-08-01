import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TestModulModule} from './test-modul/test-modul.module';
import {ContentModule} from './content/content.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestModulModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
