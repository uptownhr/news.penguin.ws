import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import type { Store } from 'pinia'

export const loggedInGuard =
  (auth: Store<'auth', { isLoggedIn: boolean }>) =>
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    if (to.meta.requiresAuth && !auth.isLoggedIn) {
      return next({
        name: 'login',
      })
    }
    next()
  }
