import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService{

 user = new Subject<string>();

  constructor(){}

  login(){
    this.user.next('Dennis');
  }

  getCurrentUser(): Subject<string>{
    return this.user;
}
}
