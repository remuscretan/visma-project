import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmdbService } from './services/omdb.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { StorageService } from './services/storage.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [
    OmdbService,
    StorageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
