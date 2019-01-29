import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import ProductsTab from './containers/ProductsTab';
import LoginContainer from './components/Login/Login';
import RecipesTab from './containers/RecipesTab';

import Main from './components/Admin/Main/Main';
import AddFood from './components/Admin/AddFood/AddFood';
import AddProduct from './components/Admin/AddProduct/AddProduct';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        private: false
    },
    {
        path: '/calculator',
        component: Calculator,
        private: false
    },
    {
        path: '/products',
        component: ProductsTab,
        private: false
    },
    {
        path: '/admin',
        component: Main,
        private: true
    },
    {
        path: '/login',
        component: LoginContainer,
        private:false
    },
    {
        path: '/recipes',
        component: RecipesTab,
        private: false
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