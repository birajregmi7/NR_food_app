import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'; // Import the CSS file
import { createBrowserRouter, Outlet, RouterProvider, } from 'react-router-dom';
// import Json from 'Json'
import AllComponents from './components/AllComponents'
import Header from './components/Header';
import Body from './components/Main';
import Footer from './components/Footer'
const About = lazy(() => import('./components/About'))
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error'
import UserContext from './utils/UserContext';
import store from './utils/store';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
const App = () => {
const user = {
    user:'adarsh',
    email: 'biraj@gmail.com'
}
    return (
        <>
        <Provider store={store}>
            <UserContext.Provider value={user} >
                <Header />
                <Outlet />
                {/* <Footer /> */}
            </UserContext.Provider>
            </Provider>
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },{
                path:'/cart',
                element:<Cart/>
            }
        ]
    }
])

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<RouterProvider router={appRouter} />)
