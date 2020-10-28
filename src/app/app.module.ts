// Automatically generated imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { PAGES } from 'src/app/home/components/pages';

// Modules
import { SharedComponentsModule } from './home/components/shared/shared-components.module';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PAGES
  ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    SharedComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
