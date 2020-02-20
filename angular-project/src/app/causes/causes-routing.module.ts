import {Routes, RouterModule} from '@angular/router';
import { CausesListComponent } from './causes-list/causes-list.component';
import { CreateCauseComponent } from './create-cause/create-cause.component';
import { DetailsComponent } from './details/details.component';
import { DonateComponent } from './donate/donate.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'cause',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CausesListComponent
            },
            {
                path: 'create',
                component: CreateCauseComponent,
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
                path: 'donate/:id',
                component: DonateComponent,
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

export const CauseRoutingModule = RouterModule.forChild(routes);