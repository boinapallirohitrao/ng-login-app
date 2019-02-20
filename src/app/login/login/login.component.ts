import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status: boolean = true;
  user: SocialUser;
  
  password(){
    this.status = !this.status;       
  }

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      let userData = { 'email': this.user.email, 'firstName': this.user.name, 'lastName': this.user.lastName,'profilePicture': this.user.photoUrl};
      localStorage.setItem('logindata', JSON.stringify(userData));

      setTimeout(() => {
          window.location = "https://www.skybooker.com/";
      },5000);
    }); 
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));

    
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }

}
