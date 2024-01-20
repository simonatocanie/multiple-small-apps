
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './components/Layout/RootLayout';
import Increment from './components/Increment/Increment';
import OrderApp from './components/OrderApp/OrderApp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Increment /> },
            { path: '/order-app', element: <OrderApp /> },
        ]
    }
])
const App = () => {
    return <RouterProvider router={router} />
}
export default App;