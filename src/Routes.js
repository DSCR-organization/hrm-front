import React, { Suspense, lazy, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import GuestGuard from './guard/GuestGuard'
import AuthGuard from './guard/AuthGuard'
import MainLayout from './layout/main_layout/MainLayout';

function Routes() {
  const routeConfigs = [
    {
      exact: true,
      guard: GuestGuard,
      path: '/login',
      component: lazy(() => import('./pages/login')),
    },
    
    {
      path: '/',
      guard: AuthGuard,
      layout: MainLayout,
      routes: [
        {
          exact: true,
          path: '/dashboard/home',
          component: lazy(() => import('./pages/Home')),
        },
        {
          exact: true,
          path: '/dashboard/reports/reports1',
          component: lazy(() => import('./pages/About')),
        },
        {
          exact: true,
          path: '/dashboard/reports/reports2',
          component: lazy(() => import('./pages/Overview')),
        },
      ]
    }

  ]
  const renderRoutes = (routes) =>
    routes ? (
      <Suspense fallback={<b>Loading...</b>}>
        <Switch>
          {routes.map((route, i) => {
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;
            const Component = route.component;
            return (
              
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} />
                      )}
                    </Layout>
                  </Guard>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    ) : null
  return renderRoutes(routeConfigs);
}
export default Routes;