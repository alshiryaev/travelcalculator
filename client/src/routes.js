import { Home } from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import { ProductsTab } from './containers/ProductsTab';
import LoginContainer from './components/Login/Login';
import { RecipesTab } from './containers/RecipesTab';
import { NotFound } from './components/NotFound/NotFound';

import Admin from './components/Admin/Admin';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    private: false,
  },
  {
    path: '/calculator',
    component: Calculator,
    private: false,
  },
  {
    path: '/products',
    component: ProductsTab,
    private: false,
  },
  {
    path: '/admin',
    component: Admin,
    private: true,
  },
  {
    path: '/login',
    component: LoginContainer,
    private: false,
  },
  {
    path: '/recipes',
    component: RecipesTab,
    private: false,
  },
  {
    path: '*',
    component: NotFound,
    private: false,
  },
];

export default routes;
