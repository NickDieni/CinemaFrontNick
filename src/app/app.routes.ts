import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

export const routes: Routes = [
    { path: 'frontpage', component: FrontpageComponent },
    { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/frontpage' }, // Wildcard fallback
];
