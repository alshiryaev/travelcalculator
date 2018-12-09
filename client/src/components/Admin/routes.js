import Main from './Main/Main';
import AddFood from './AddFood/AddFood';
import AddProduct from './AddProduct/AddProduct';


const routes = [
    {
        path: '/admin/',
        exact: true,
        component: Main
    },
    {
        path: '/admin/addfood',
        component: AddFood
    },
    {
        path: '/admin/addproduct',
        component: AddProduct
    }
];

export default routes;