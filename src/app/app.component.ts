import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'GovData - Dashboard';

  constructor(public router: Router) {}

  public navigate() {
    this.router.navigateByUrl('');
  }
}
