import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child } from './child/child';
import { New1 } from './new1/new1';
import { NotFound } from './not-found/not-found';
import { authGuard } from './auth-guard';
                  
const routes: Routes = [{
  path:"",component:Child
},{
  path:"new",component:New1,canActivate:[authGuard]
},{
  path:"**",component:NotFound
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
