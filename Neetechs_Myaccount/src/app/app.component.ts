import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neetechs';
  LoginURL = environment.LoginURL;

  frameSrc:any;
  constructor(){}
    ngOnInit() {
      // Authorization
      if (localStorage.getItem("userToken") == null) {
        (window.top as any).addEventListener("message", (event:any) => {
          if (localStorage.getItem("userToken") == null) {
            if (event.origin === "http://localhost:4200/" || event.origin === "https://neetechs.web.app/"|| event.origin === "https://neetechs.com/") {
              return;
            } else {
              if (event.data['type'] === "credential") {
                if (event.data.getToken !== 'undefined') {
                  localStorage.setItem("userToken", event.data.getToken)
                  localStorage.setItem("UserInfo", event.data.getUserInfo)
                }
              }
            }
          }
        }, false);
      }
      this.frameSrc= this.LoginURL+ window.navigator.language.substring(0, 2)+"/#/getCredential"+"?"+ "host="+ window.location.href+"&"+"language="+ window.navigator.language +"&" + "pathname="+window.location.pathname;
      (document.getElementById('iframeAccount')as any)["src"] = this.frameSrc;
      console.log(this.frameSrc)
    }

}
