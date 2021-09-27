import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "mapas",
    loadChildren: () => import("./mapas/mapas.module").then( m=> m.MapasModule),
  },
  {
    path: '**',
    redirectTo: "mapas"
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
