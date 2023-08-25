import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Catalog from './pages/Catalog';
import { FilterProvider } from './components/FilterContext';
import FullCard from './pages/FullCard';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Restore from './pages/Restore';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <FilterProvider>
                <Header />
                <div>
                    <Outlet />
                </div>
            </FilterProvider>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: 'card', element: <FullCard /> },
            { path: 'profile', element: <Profile /> },
            { path: 'login', element: <Login /> },
            { path: 'restore', element: <Restore /> },
            { path: 'registration', element: <Registration /> },
            { path: 'catalog', element: <Catalog /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
