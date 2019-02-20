import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Rohit Rao';
  username : string = "Iam Good Boy";
  response : any;
  response1: string = "Loading";
  
  ngCheck: boolean = false;

  constructor(public http : HttpClient){

}

ngOnInit(){


}

// search(){

//   this.http.get('https://api.github.com/users/' + this.username)
//         .subscribe((response) => {
//             this.response = response;
//             console.log(this.response)
//         }
//   );
//   }


//   search1(){
//     this.ngCheck = true; 
//     alert('Correct');
//   }

}
