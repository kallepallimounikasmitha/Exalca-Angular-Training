import { Component, OnInit } from '@angular/core';
import { userservice } from '../services/userservice';
import { Router } from '@angular/router';
import { userdetails } from '../models/userdetails';
import { userphotodetails } from '../models/userphotodetails';

@Component({
  selector: 'app-menubarlist',
  templateUrl: './menubarlist.component.html',
  styleUrls: ['./menubarlist.component.css']
})
export class MenubarlistComponent implements OnInit {


  constructor(private uservice: userservice, private route: Router) { }

  formdata;
  un;
  uname;
  url: string;
  id:number;
  userdetailss : userdetails;
  photodetails : userphotodetails;
  user: userdetails[]=[];
  

 

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers() {
    this.uservice.getAllUsers().subscribe((data: userdetails[]) => {
      this.user = data;
     // console.log(this.user);
    });
  }


    




}
