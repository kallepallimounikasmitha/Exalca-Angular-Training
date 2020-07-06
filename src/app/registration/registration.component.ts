import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private route: Router) { }

  signUpForm: FormGroup;
  form: any;

  state = ['Karnataka', 'AndhraPradesh']
  karnataka_city = ['Bangalore', 'Mangalore', 'Vijayapur']
  andhra_city = ['Krishna', 'Guntur', 'Ongole']
  selectedstate;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null),
      'aboutyourself': new FormControl(null),
      'phonenumber': new FormControl(null),
      'gitid': new FormControl(null),
      'linkedid': new FormControl(null),
      'password': new FormControl(null),
      'email': new FormControl(null),
      'occupation': new FormControl('Student'),
      'states': new FormControl('AndhraPradesh')


    })
  }

  // defaultValue = 'Student';

  // onSubmit(forms){
  //   console.log(forms);
  //   localStorage.setItem('form', JSON.stringify(forms));

  //   this.route.navigate(["\login"]);  


  // }

  onSubmit() {
    //console.log(this.signUpForm.value);
    //this.form  =  this.signUpForm;
    localStorage.setItem('form', JSON.stringify(this.signUpForm.value));
    

  }


  getSelectedOptionText(event: Event) {

    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selecctElementText = selectedOptions[selectedIndex].text;
    if (selecctElementText === "Karnataka") {
      this.selectedstate = this.karnataka_city;
    }
    else {
      this.selectedstate = this.andhra_city;
    }


  }

}
