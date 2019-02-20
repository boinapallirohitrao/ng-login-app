import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  paramid:string;
  paraminum:number;
  response : any;
  pnr:number;

  constructor(private route: ActivatedRoute,private router:Router,public http : HttpClient) { 
    // this.route.params.subscribe(res => console.log(res.id)
   // );

   this.route.queryParams.subscribe(params => {
    this.pnr = params['pnr'];
    console.log(this.pnr); // Print the parameter to the console. 
    });
  }

  

 

  ngOnInit() {

    // this.route.paramMap.subscribe(
    //   params =>{
    //     this.paramid = params.get('id');
    //     this.paraminum = +params.get('number');
    //     console.log(this.paraminum);
    //   }
    // );

    this.http.get('https://api.github.com/users/' + this.pnr)
      .subscribe((response) => {
          this.response = response;
          console.log(this.response)
        }
    );

  }

}
