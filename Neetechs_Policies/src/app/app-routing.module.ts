import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { NotAuthGuard } from 'src/services/auth/not-auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
