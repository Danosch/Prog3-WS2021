import { Inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({providedIn: 'root'})
export class CustomTitleService{
  constructor(
    private title: Title,
    @Inject('titleString') private titleString: string
    ){}

  updateCustomPageTitle() {
    this.title.setTitle(this.titleString);
  }
}
