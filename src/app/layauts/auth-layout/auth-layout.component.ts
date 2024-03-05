import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavComponent } from 'src/app/components/auth-nav/auth-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule,AuthNavComponent,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

}
