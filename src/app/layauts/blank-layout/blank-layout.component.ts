import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankNavComponent } from 'src/app/components/blank-nav/blank-nav.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import {  RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,BlankNavComponent,FooterComponent,RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
  scrollUp():void{
      window.scrollTo(0,0)
  }
}
