import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Fragment } from 'react';
import FullCard from './pages/FullCard';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Fragment>
                <Header />
                <div>
                    <Outlet />
                </div>
            </Fragment>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'card', element: <FullCard /> },
            { path: 'profile', element: <Profile /> },
            { path: 'registration', element: <Registration /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
