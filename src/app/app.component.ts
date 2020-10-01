import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss','transition.min.css']
})
export class AppComponent {
 
  splash = true;
  clase = "candado ld ld-blur-in";


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(1000).subscribe(() => this.clase = "candado ld ld-blur-out")
      timer(2000).subscribe(() => this.clase = "candado ld ld-blur-in")
      timer(3000).subscribe(() => this.clase = "candado ld ld-blur-out")
      timer(4000).subscribe(() => this.clase = "candado ld ld-blur-in")
      timer(5000).subscribe(() => this.splash = false)

    });
  }
}
