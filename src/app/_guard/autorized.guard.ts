import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const autorizedGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  
  
  const authService = inject(AuthService);
  const user = authService.getUser()
  
  return user ? true : router.parseUrl('/login')
};
