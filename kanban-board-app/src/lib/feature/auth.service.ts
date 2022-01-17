import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService{

 user = new Subject<string>();

  constructor(private httpClient: HttpClient){}

  login(){
    this.httpClient.get('https://api.github.com/users/Danosch')
    .subscribe((response: {login: string}) =>{
    this.user.next(response.login);
    });

  }

  getCurrentUser(): Subject<string>{
    return this.user;
}
}
