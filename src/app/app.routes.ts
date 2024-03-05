import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { MapComponent } from './screens/map/map.component';
import { EnterpriseComponent } from './screens/enterprise/enterprise.component';
import { autorizedGuard } from './_guard/autorized.guard';
import { loggedGuard } from './_guard/logged.guard';

export const routes: Routes = [
    {
        path: '',
        component: MapComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [loggedGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [loggedGuard]
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
