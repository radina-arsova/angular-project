import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CoreModule } from '../core/core.module';
import { EventRoutingModule } from './events-routing.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsListComponent, CreateEventComponent, DetailsComponent, EditComponent],
  imports: [
    CommonModule,
    CoreModule,
    EventRoutingModule,
    RouterModule,
    FormsModule
  ],
})
export class EventsModule { }
