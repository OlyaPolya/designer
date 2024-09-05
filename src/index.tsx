import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './App/components/Error';
import Modal, { loader as appLoader } from './App/components/Modal';
import ShowreelModal from './App/components/Showreel/ShowreelModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

      {
        loader: appLoader,
        path: ':itemID/',
        element: <Modal />,
      },
      {
        path: 'showreel/',
        element: <ShowreelModal />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
