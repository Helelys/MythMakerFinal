import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home';
import { Npc } from './pages/npc/npc';


export const routes: Routes = [
    {path: "", component: Home},
    {path: "npc", component: Npc}
];

export const routing = RouterModule.forRoot(routes);
