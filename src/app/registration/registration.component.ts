import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private route: Router) { }

  state=['Karnataka', 'AndhraPradesh']
  karnataka_city = ['Bangalore', 'Mangalore', 'Vijayapur']
  andhra_city = ['Krishna','Guntur','Ongole']
  selectedstate;

  ngOnInit(): void {
  }

  defaultValue = 'Student';

  onSubmit(forms){
    console.log(forms);
    localStorage.setItem('form', JSON.stringify(forms));

    this.route.navigate(["\login"]);  
   

  }


  getSelectedOptionText(event: Event){

    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selecctElementText = selectedOptions[selectedIndex].text;
    if(selecctElementText === "Karnataka") {
      this.selectedstate = this.karnataka_city;
    }
    else{
      this.selectedstate = this.andhra_city;
    }


  }

}
