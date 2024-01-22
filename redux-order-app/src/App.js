
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './components/Layout/RootLayout';
import Login from "./components/Login/Login";
import UserProfile from "./components/Login/UserProfile/UserProfile";
import Products from "./components/Shop/Products/Products";
import Cart from "./components/Shop/Cart/Cart";
import Counter from './components/Counter/Counter';
import OrderApp from './components/OrderApp/OrderApp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Counter /> },
            { path: '/order-app', element: <OrderApp /> },
            { path: '/login', element: <Login /> },
            { path: '/products', element: <Products /> },
            { path: '/cart', element: <Cart /> },
            { path: '/user_profile', element: <UserProfile /> },
        ]
    }
])
const App = () => {
    return <RouterProvider router={router} />
}
export default App;