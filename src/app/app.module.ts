import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { LoginComponent } from "./componentes/login/login.component";
import { HomePage } from "./home/home.page";
import { AppRoutingModule } from './app-routing.module';
 
//Extenciones 
 import { DeviceMotion } from '@ionic-native/device-motion/ngx';
 import { Flashlight } from '@ionic-native/flashlight/ngx';
 import { Vibration } from '@ionic-native/vibration/ngx';

 //Firebase
 // 1. Import the libs you need
 import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore';
 import { AngularFireStorageModule } from '@angular/fire/storage';
 import { AngularFireAuthModule } from '@angular/fire/auth';

//Enviroment
import { firebaseConfig } from "../environments/environment";

//alertas
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AppComponent,LoginComponent,HomePage],
  entryComponents: [],
  imports: [
    BrowserModule, 
    CommonModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ToastrModule.forRoot() //Alertas
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
