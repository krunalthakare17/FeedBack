import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionMasterComponent } from './question-master.component';

const routes: Routes = [{ path: '', component: QuestionMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionMasterRoutingModule { }
