import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuOsModule } from './menu-os/menu-os.module';
import { MainScreenModule } from './main-screen/main-screen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MenuOsModule, MainScreenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
