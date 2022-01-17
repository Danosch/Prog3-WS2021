import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CustomTitleService{

 user?: string;
  constructor(){}

  login(){
    this.user = 'Dennis';
    console.log(this.user)
  }

  getCurrentUser(): string{
    return this.user;
}
}
