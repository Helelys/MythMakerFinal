import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: "home", component: Home}
];

export const routing = RouterModule.forRoot(routes);
