import { Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './shared/Layout';

export default function App() {
  return (
    <Layout>
      {AppRoutes.map((route, index) => {
        const { element, path, exact } = route;
        return (
          <Route key={`k-${index.toString()}`} exact={exact} path={path}>
            {element}
          </Route>
        );
      })}
    </Layout>
  );
}
