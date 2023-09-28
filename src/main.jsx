import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProfilePage from './pages/ProfilePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store';
import SinglePage from './pages/SinglePage';
import Layout from './Layout/Layout';
import AuthProvider from './hooks/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <ProfilePage></ProfilePage>
      },
      {
        path: ':id',
        element: <SinglePage></SinglePage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>

  // </React.StrictMode>,
)
