import { AfterViewInit, Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PdfViewerModule,
    NgxSpinnerModule  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  constructor(private spinner: NgxSpinnerService) {}

  ngAfterViewInit(): void {
    this.spinner.hide()
  }
  
}
