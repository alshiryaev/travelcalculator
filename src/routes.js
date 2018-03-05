import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import About from './components/About/About';
import foodTable from './components/Foodtable/Foodtable';

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
        path:'/about',
        component:About
    },
    {
        path:'/foodTable',
        component:foodTable
    }
];

export default routes;