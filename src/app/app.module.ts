import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NewcompComponent } from './newcomp/newcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NewcompComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
