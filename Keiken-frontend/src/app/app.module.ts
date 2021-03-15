import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponentM} from './component/modal/modal.componentm';
import {ModalContentComponent} from './component/modal-content/modal-content.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponentM,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule { }
