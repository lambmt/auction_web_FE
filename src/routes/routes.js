import config from "~/config";

import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Login from "~/pages/Login";
import Contact from "~/pages/Contact";
import ForgottenPassword from "~/pages/ForgottenPassword";
import DetailProduct from "~/pages/DetailProduct";


import Live from "~/pagesVendor/Live";
import Add from "~/pagesVendor/Add";
import Shop from "~/pagesVendor/Shop";
import WaitConfirmation from "~/pagesVendor/WaitConfirmation";


const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.product,
        component: Product,
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.contact,
        component: Contact,
    },
    {
        path: config.routes.forgottenPassword,
        component: ForgottenPassword,
    },
    {
        path: config.routes.detailProduct,
        component: DetailProduct,
    },
];

const vendorRoutes = [
    {
        path: config.routes.vendorLive,
        component: Live,
    },
    {
        path: config.routes.vendorAdd,
        component: Add,
    },
    {
        path: config.routes.vendorShop,
        component: Shop,
    },
    {
        path: config.routes.vendorWaitConfirmation,
        component: WaitConfirmation,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes, vendorRoutes };
