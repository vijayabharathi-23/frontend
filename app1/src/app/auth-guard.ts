import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Child } from './child/child';

export const authGuard: CanActivateFn = (route, state) => {
  const child = inject(Custom.spec.ts);
  const r = inject(Router);
  if(child.checkLocal()=="admin"){
    r.navigateByUrl("");
    return false;
  }
  return true;
};
