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

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfilePage></ProfilePage>,
    children: [
      {
        path: ':id',
        element: <ProfilePage></ProfilePage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
  // </React.StrictMode>,
)
