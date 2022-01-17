import { Component, OnInit } from '@angular/core';
import { CustomTitleService } from 'src/lib/feature/costum-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'kanban-board-app';

  constructor(
    private customTitleService: CustomTitleService,
    private authService: AuthService
    ){}

  ngOnInit(): void {
    this.customTitleService.updateCustomPageTitle();
  }

  onLoginClick(){
    this.authService.login();
  }
}
