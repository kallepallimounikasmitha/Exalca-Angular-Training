import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class userservice{
    constructor(private http: HttpClient){}

    

  getAllUsers(){
     return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getEachUser(id:any){
      return this.http.get("https://jsonplaceholder.typicode.com/users/?id="+id);
  }
  getEachPhoto(id:any){
    return this.http.get("https://jsonplaceholder.typicode.com/photos/?id="+id);
  }
}