import React, { Suspense,lazy } from 'react'
import { Switch, Route} from 'react-router-dom';


function Routes() {
  const routeConfigs = [
        {
          path: '/',
          exact: true,
          component: lazy(() => import('./pages/Home')),
        },
        {
          exact: false,
          path: '/reports/reports1',
          component: lazy(() => import('./pages/About')),
        },
        {
          exact: false,
          path: '/reports/reports2',
          component: lazy(() => import('./pages/Overview')),
        },
  
  ]
  const renderRoutes = (routes) =>
    routes ? (
      <Suspense fallback={<b>bllll</b>}>
      <Switch>
        {routes.map((route, i) => {
          // const Guard = route.guard || Fragment;
          // const Layout = route.layout || Fragment;
          // const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
              // render={(props) => (
              //   <Guard>
              //     <Layout>
              //       {route.routes ? (
              //         renderRoutes(route.routes)
              //       ) : (
              //         <Component {...props} />
              //       )}
              //    </Layout>
              //    </Guard>
              // )}
            />
          );
        })}
      </Switch>
      </Suspense>
    ) : null
  return renderRoutes(routeConfigs);
}
export default Routes;