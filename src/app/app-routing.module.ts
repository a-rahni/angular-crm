import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  // lazy loading of modules (for modules not loaded at startup)
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    // tout les path declarer après veont vers page not found
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  // 1 seul moetur router avec root - charge les module importé dans l'ordre
  // dans l'order et creer les routes dans l'ordre des import:-- Faire attention a path'**' car les module chargé après seront redirigé vers not found
  //imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // permet de charger les lazy en tâche de fond après (un peu de temps) rechargement les module de demarrage
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
