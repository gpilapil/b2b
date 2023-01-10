import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

const AppRoutes: { index?: boolean; element: any; path?: string, exact: boolean }[] = [
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
  {
    path: '/counter',
    element: <Counter />,
    exact: false,
  },
  {
    path: '/fetch-data',
    element: <FetchData />,
    exact: false,
  },
];

export default AppRoutes;
