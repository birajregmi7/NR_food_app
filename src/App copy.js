import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'; // Import the CSS file
import { createBrowserRouter, Outlet, RouterProvider, } from 'react-router-dom';
// import Json from 'Json'
import AllComponents from './src/components/AllComponents'
import Header from './src/components/Header';
import Body from './src/components/Main';
import Footer from './src/components/Footer'
const About = lazy(() => import('./src/components/About'))
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import Error from './src/components/Error'
const App = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
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
            }
        ]
    }
])

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<RouterProvider router={appRouter} />)
