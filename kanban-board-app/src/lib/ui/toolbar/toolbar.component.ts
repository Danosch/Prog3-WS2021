import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/lib/feature/auth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit{

  @Input()
  title = 'My Board';
  username?: string;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.authService.getCurrentUser().subscribe(user => {
        this.username = user;

      });
  }
}
