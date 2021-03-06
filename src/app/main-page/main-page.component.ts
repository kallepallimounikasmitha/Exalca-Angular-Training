import { Component, OnInit } from '@angular/core';
import { userservice } from '../services/userservice';
import { Router } from '@angular/router';
import { userdetails } from '../models/userdetails';
import { userphotodetails } from '../models/userphotodetails';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private uservice: userservice, private route: Router) { }

  formdata;
  un;
  uname;
  url: string;
  id:number;
  userdetailss : userdetails;
  photodetails : userphotodetails;
  user: userdetails[]=[];
  

  ngOnInit(){
    this.formdata=   JSON.parse(localStorage.getItem('form'));
    this .un = this.formdata.username;

    this.getUsers();
  }
  getUsers() {
    this.uservice.getAllUsers().subscribe((data: userdetails[]) => {
      this.user = data;
     // console.log(this.user);
    });
  }

  // getDetails(id){

  //   this.uservice.getEachUser(id).subscribe((datas: userdetails) => {
  //     this.userdetailss = datas;
  //     console.log(this.userdetailss);
  //   });

    // this.uservice.getEachPhoto(id).subscribe((datapic: userphotodetails) => {
    //   this.photodetails = datapic;
    //   console.log(this.photodetails);
    // });

  // }


}
