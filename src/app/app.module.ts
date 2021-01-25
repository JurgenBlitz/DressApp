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

// Dependencies
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// Modules
import {TranslateModule} from '@ngx-translate/core';
import { SharedComponentsModule } from './shared/shared-components.module';
import { HomePageModule } from './pages/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  //  PAGES
  ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    TranslateModule.forRoot(),
    AppRoutingModule,
    SharedComponentsModule,
    HomePageModule
  ],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
