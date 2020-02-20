import {Routes, RouterModule} from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'event',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: EventsListComponent
            },
            {
                path: 'create',
                component: CreateEventComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: true
                }
            },
            {
                path: 'details/:id',
                component: DetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: true
                }
            },
            {
                path: 'edit/:id',
                component: EditComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: true
                }
            }
        ]
    }
];

export const EventRoutingModule = RouterModule.forChild(routes);