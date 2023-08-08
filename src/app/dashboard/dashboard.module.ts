import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../them/header/header.module';
import { FooterModule} from '../them/footer/footer.module';
import { NavbarModule} from '../them/navbar/navbar.module';

@NgModule({
  declarations: [
    DashboardComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    FooterModule,
    NavbarModule,
    
  ]
})
export class DashboardModule { }
