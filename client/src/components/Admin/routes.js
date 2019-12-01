import AddFood from './AddFood/AddFood';
import { AddProductContainer } from '../../containers/AddProductContainer';
import Main from './Main/Main';

const routes = [
  {
    path: '/admin',
    exact: true,
    component: Main,
    private: true,
  },
  {
    path: '/admin/addfood',
    component: AddFood,
    private: true,
  },
  {
    path: '/admin/addproduct',
    component: AddProductContainer,
    private: true,
  },
  {
    path: '/admin/editproduct/:id',
    component: AddProductContainer,
    private: true,
  },
];

export default routes;
