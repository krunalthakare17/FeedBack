import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', 
  loadChildren: () => import ('./login/login.module').then(m=>m.LoginModule) 
},
 { path: 'dashboard',
  loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule) 
}, 
  { path: 'feedbackForm',
   loadChildren: () => import('./feedback-form/feedback-form.module').then(m => m.FeedbackFormModule) 
  },
  { path: 'question-master', 
    loadChildren: () => import('./question-master/question-master.module').then(m => m.QuestionMasterModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
