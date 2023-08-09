import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Application from './components/application';
import Parser from './components/parser';
import { parsers } from './parsers';

export const defaultRoute = 'parser/tree-sitter-javascript';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Application />,
    children: [
      {
        path: 'parser',
        element: <Navigate to={defaultRoute} />,
      },
      {
        path: 'parser/:parserId',
        element: <Parser />,
        loader: async ({ params }) => {
          const parser = parsers.find((item) => item.id === params.parserId);

          return { parser };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
