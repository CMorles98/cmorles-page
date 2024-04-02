import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavBarComponent, 
    FooterComponent,
    NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
  ]
})
export class AppComponent {
  title = 'cmorles-app';
  constructor(spinner: NgxSpinnerService){
    spinner.show()
    AOS.init()
  }
}
