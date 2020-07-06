import { Component, OnInit, Input } from '@angular/core';
import { userservice } from 'src/app/services/userservice';
import { Router } from '@angular/router';
import { userdetails } from 'src/app/models/userdetails';
import { userphotodetails } from 'src/app/models/userphotodetails';

@Component({
  selector: 'app-menubaritem',
  templateUrl: './menubaritem.component.html',
  styleUrls: ['./menubaritem.component.css']
})
export class MenubaritemComponent implements OnInit {

  constructor(private uservice: userservice, private route: Router) { }
  

  @Input() users;
  

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


    getDetails(id){

    this.uservice.getEachUser(id).subscribe((datas: userdetails) => {
      this.userdetailss = datas;
      console.log(this.userdetailss);
    });

    this.uservice.getEachPhoto(id).subscribe((datapic: userphotodetails) => {
      this.photodetails = datapic;
      console.log(this.photodetails);
    });

  }

}
