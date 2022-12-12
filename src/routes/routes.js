import config from "~/config";

import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Login from "~/pages/Login";
import Contact from "~/pages/Contact";
import ForgottenPassword from "~/pages/ForgottenPassword";

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
