import Main from './Main/Main';
import AddFood from './AddFood/AddFood';

 const routes = [
    {
        path:'/admin/',
        exact: true,
        component:Main
    },
    {
        path:'/admin/addfood',
        component:AddFood
    }
];

export default routes;