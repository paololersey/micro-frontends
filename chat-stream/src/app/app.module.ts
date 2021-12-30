import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslateModule.forRoot(), StreamAutocompleteTextareaModule, StreamChatModule],
  providers: [],
  //bootstrap: [AppComponent],
  entryComponents :  [
    AppComponent
 ]
})
export class AppModule {
  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(AppComponent, {injector : this.injector});
      customElements.define('chat-component',el);
      }
  }
