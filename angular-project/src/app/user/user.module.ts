import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from '../core/core.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent, EditComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class UserModule { }
