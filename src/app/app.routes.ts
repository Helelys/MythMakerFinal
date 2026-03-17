import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home';
import { Npc } from './pages/npc/npc';
import { Missao } from './pages/missao/missao';


export const routes: Routes = [
    {path: "", component: Home},
    {path: "npc", component: Npc},
    {path: "missao", component: Missao}
];

export const routing = RouterModule.forRoot(routes);
