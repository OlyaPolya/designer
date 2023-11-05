import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import ErrorPage from './App/pages/Error';
import Modal, { loader as appLoader } from './App/pages/Main/Modal';
import RedirectPage from './App/pages/Redirect';
import { store } from './App/store/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        loader: appLoader,
        path: '/:itemID/',
        element: <Modal />,
      },
    ],
  },
  {
    path: 'redirect',
    element: <RedirectPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
