import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { PostalcodeComponent } from './components/postalcode/postalcode.component';
import { UserComponent } from './components/user/user.component';
import { SeatComponent } from './components/seat/seat.component';

export const routes: Routes = [
    { path: 'frontpage', component: FrontpageComponent },
    { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'postalcode', component: PostalcodeComponent },
    { path: 'user', component: UserComponent },
    { path: 'seat', component: SeatComponent },
    { path: '**', redirectTo: '/frontpage' }, // Wildcard fallback
];
