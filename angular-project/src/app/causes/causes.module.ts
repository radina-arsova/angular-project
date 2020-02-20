import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CausesListComponent } from './causes-list/causes-list.component';
import { CreateCauseComponent } from './create-cause/create-cause.component';
import { CauseRoutingModule } from './causes-routing.module';
import { CoreModule } from '../core/core.module';
import { DetailsComponent } from './details/details.component';
import { DonateComponent } from './donate/donate.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CausesListComponent,
    CreateCauseComponent,
    DetailsComponent,
    DonateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CauseRoutingModule,
    CoreModule,
    RouterModule,
    FormsModule
  ],
})
export class CausesModule { }
