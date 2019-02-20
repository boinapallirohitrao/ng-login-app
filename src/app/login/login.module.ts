import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

// Configs 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("888326230760-b15bkqcupiaehdd58268piinnqucb0sm.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("282577308941815")
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider("78tjwa8nq1kdi1", false, 'en_US')
  }
]);
 

export function provideConfig() {
  return config;
}


@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
  
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
