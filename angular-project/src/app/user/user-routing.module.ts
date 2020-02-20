import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: false
                }
            },
            {
                path: 'register',
                component: RegistrationComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: false
                }
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: true
                }
            },
            {
                path: 'edit',
                component: EditComponent,
                canActivate: [AuthGuard],
                data: {
                    isLoged: true
                }
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);