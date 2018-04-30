import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrateRoutingModule } from './integrate-routing.module';
import { IntegrateComponent } from './integrate.component';
// import { RecentSubmissionsComponent } from './recent-submissions/recent-submissions.component';
// import { NewSubmissionComponent } from './new-submission/new-submission.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        IntegrateRoutingModule,
        SharedModule
    ],
    declarations: [
        IntegrateComponent
        // RecentSubmissionsComponent,
        // NewSubmissionComponent
    ]
})
export class FormModule { }
