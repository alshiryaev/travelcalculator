import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import About from './components/About/About';
import Food from './components/Food/Food';

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
        path:'/Food',
        component:Food
    }
];

export default routes;