
import AddFood from './AddFood/AddFood';
import AddProduct from './AddProduct/AddProduct';
import Main from './Main/Main';

const routes = [   
    {
        path: '/admin',
        exact: true,
        component: Main,
        private: true
    },
    {
        path: '/admin/addfood',
        component: AddFood,
        private: true
    },
    {
        path: '/admin/addproduct',
        component: AddProduct,
        private: true
    },
    {
        path: '/admin/editproduct/:id',
        component: AddProduct,
        private: true
    }
];

export default routes;