import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { LoginComponent } from "./componentes/login/login.component";
import { HomePage } from "./home/home.page";
import { AppRoutingModule } from './app-routing.module';

 import { DeviceMotion } from '@ionic-native/device-motion/ngx';
 import { Flashlight } from '@ionic-native/flashlight/ngx';
 import { Vibration } from '@ionic-native/vibration/ngx';


@NgModule({
  declarations: [AppComponent,LoginComponent,HomePage],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     DeviceMotion,
     Flashlight,
     Vibration,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
