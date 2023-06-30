import { Directive, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appAuthorization]'
})
export class AuthorizationDirective implements OnInit {
  constructor(private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/client') {
        this.hideSaveButton();
      } else {
        this.showSaveButton();
      }
    });
  }

  private hideSaveButton(): void {
    const saveButton = this.elementRef.nativeElement.querySelector('.save-button');
    if (saveButton) {
      saveButton.style.display = 'none';
    }
  }

  private showSaveButton(): void {
    const saveButton = this.elementRef.nativeElement.querySelector('.save-button');
    if (saveButton) {
      saveButton.style.display = 'block';
    }
  }
}
