import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";



import Home from '../pages/Home/Home.jsx';
import AboutUs from "../pages/AboutUs/AboutUs.jsx";
import Product from '../pages/Product/Product.jsx';
import Products from '../pages/Products/Products.jsx';


import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";


import SignIn from "../Auth/SignIn/SignIn.jsx";
import SignUp from "../Auth/SignUp/SignUp.jsx";

import '../App.scss'
import Stores from "../pages/Stores/Stores.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Error from "../components/Error/Error.jsx";
import Profile from "../Auth/Profile/Profile.jsx";
import Cart from "../components/Cart/Cart.jsx";



function layout() {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}



function Root() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: layout(),
            children: [
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/",
                    element: <Home />
                },

                {
                    path: "/product/:id",
                    element: <Product />
                },

                {
                    path: "/products/:id",
                    element: <Products />
                },

                {
                    path: "/about-us",
                    element: <AboutUs />
                },

                {
                    path: "/stores",
                    element: <Stores />
                },

                {
                    path: "/contact-us",
                    element: <Contact />
                },

                {
                    path: "/profile",
                    element: <Profile />
                },



            ]
        },
        {
            path: "/auth",
            children: [
                {
                    path: "/auth/sign-in",
                    element: <SignIn />,
                },
                {
                    path: "/auth/sign-up",
                    element: <SignUp />
                },
            ]

        },

        {
            path: '*',
            element: <Error />
        }

    ]);
    return router
}

export default Root;