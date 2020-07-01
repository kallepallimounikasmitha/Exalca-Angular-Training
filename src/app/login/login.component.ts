import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route: Router) { }

 username;
 password;
 form;

 


  ngOnInit(): void {

    this.form=   JSON.parse(localStorage.getItem('form'));

      console.log(this.form.username);
      console.log(this.form.password);

  // console.log(this.password);


  }


  onSubmiter(forms){
     
    if (forms.uname == this.form.username && forms.pass == this.form.password) {
      this.route.navigate(["\homepage"]);  
      
    }
    
    
    

  }

}
