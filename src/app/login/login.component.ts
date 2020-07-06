import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

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

 loginForm: FormGroup;

 


  ngOnInit(): void {

    this.form=   JSON.parse(localStorage.getItem('form'));

      console.log(this.form.username);
      console.log(this.form.password);


      this.loginForm = new FormGroup({ 
      'uname' : new FormControl(null),
      'pass'  : new FormControl(null)

      })

  // console.log(this.password);


  }


  // onSubmiter(forms){
     
  //   if (forms.uname == this.form.username && forms.pass == this.form.password) {
  //     this.route.navigate(["\homepage"]);  
      
  //   }

  //}

  onSubmiter(){
   // console.log(this.loginForm.value)

    if (this.loginForm.value.uname == this.form.username && this.loginForm.value.pass == this.form.password) {
          this.route.navigate(["\homepage"]);  
          
        }
        else{
          alert("Wrong Credentials")
        }

  }

}
