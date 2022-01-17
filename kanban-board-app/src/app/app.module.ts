import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../lib/ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [{provide: 'titleString', useValue: 'Hello World'}],
})
export class AppModule {}
