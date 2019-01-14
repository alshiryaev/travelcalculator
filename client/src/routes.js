import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import About from './components/About/About';
import ProductsTab from './containers/ProductsTab';
import Admin from './components/Admin/Admin';
import Autorization from './components/Autorization/Autorization';
import Recipes from './components/Recipes/Recipes';

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
        path: '/about',
        component: About
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/autorization',
        component: Autorization
    },
    {
        path: '/recipes',
        component: Recipes
    }
];

export default routes;