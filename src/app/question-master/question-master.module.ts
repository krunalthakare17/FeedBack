import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionMasterRoutingModule } from './question-master-routing.module';
import { QuestionMasterComponent } from './question-master.component';
import { HeaderModule } from '../them/header/header.module';
import { FooterModule} from '../them/footer/footer.module';
import { NavbarModule } from '../them/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalServiceService } from '../service/global-service.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    QuestionMasterComponent
  ],
  imports: [
    CommonModule,
    QuestionMasterRoutingModule,
    HeaderModule,
    FooterModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [GlobalServiceService]
})
export class QuestionMasterModule { }
