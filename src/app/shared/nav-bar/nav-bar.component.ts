import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @ViewChild('offcanvas') offcanvas: any
  showOffCanvas: boolean = false
  
  constructor() {
  }
  
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.offcanvas.nativeElement.contains(event.target) && 
        !event.target.classList.contains('offcanvas-control')) {
      this.showOffCanvas = false;
    }
  }

  goAndCloseOffCanvas(href: string){
    window.location.href = href
    this.showOffCanvas = false
  }
  
}
