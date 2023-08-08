import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackFormRoutingModule } from './feedback-form-routing.module';
import { FeedbackFormComponent } from './feedback-form.component';
import { HeaderModule } from "../them/header/header.module";
import { FooterModule} from '../them/footer/footer.module';
import { NavbarModule } from '../them/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalServiceService } from '../service/global-service.service';

@NgModule({
  declarations: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FeedbackFormRoutingModule,
    HeaderModule,
    FooterModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GlobalServiceService]
})
export class FeedbackFormModule { }

