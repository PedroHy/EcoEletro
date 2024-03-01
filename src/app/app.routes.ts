import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { MapComponent } from './screens/map/map.component';
import { EnterpriseComponent } from './screens/enterprise/enterprise.component';
import { autorizedGuard } from './_guard/autorized.guard';

export const routes: Routes = [
    {
        path: '',
        component: MapComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'enterprise',
        component: EnterpriseComponent,
        canActivate: [autorizedGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
