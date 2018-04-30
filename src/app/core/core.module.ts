import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule, routingComponents } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

// import { AuthenticationService } from './services/authentication.service';
// import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [NavbarComponent, routingComponents],
  exports: [
    RouterModule,
    NavbarComponent
  ],
  providers: [
    // AuthenticationService,
    // AuthGuardService
  ]
})
export class CoreModule { }
