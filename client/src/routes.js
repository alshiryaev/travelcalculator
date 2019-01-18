import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import ProductsTab from './containers/ProductsTab';
import Admin from './components/Admin/Admin';
import Autorization from './components/Autorization/Autorization';
import RecipesTab from './containers/RecipesTab';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/calculator',
        component: Calculator
    },
    {
        path: '/products',
        component: ProductsTab
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/login',
        component: Autorization
    },
    {
        path: '/recipes',
        component: RecipesTab
    }
];

export default routes;