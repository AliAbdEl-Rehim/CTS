import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'C.T.S';
  isAuthModeule: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;
    this.activatedRoute.url.subscribe((segments) => {
      const currentUrl = segments.join('/'); // Join the segments to form the complete URL
      console.log(currentUrl);
    });
    const currentUrl = new URL(this.router.url);
    const currentModule = currentUrl.pathname.substring(1);
    if (currentModule == 'auth') {
      this.isAuthModeule = true;
    }
  }
}
