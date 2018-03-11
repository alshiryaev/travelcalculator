import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import About from './components/About/About';
import ProductsTable from './components/ProductsTable/ProductsTable';

 const routes = [
    {
        path:'/',
        exact: true,
        component:Home
    },
    {
        path:'/calculator',
        component:Calculator
    },
    {
        path:'/products',
        component:ProductsTable
    },
    {
        path:'/about',
        component:About
    }
   
];

export default routes;