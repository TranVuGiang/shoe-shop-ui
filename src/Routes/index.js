import ShoppingLayout from '~/components/Layouts/ShoppingLayout';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import List from '~/pages/List';
import ShoppingCard from '~/pages/ShoppingCard';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/contact', component: Contact },
    { path: '/shoppingcart', component: ShoppingCard, layout: ShoppingLayout },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
