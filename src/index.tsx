import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Application from './components/application';
import Parser from './components/parser';
import { IParser, parsers } from './parsers';

export const defaultRoute = 'parser/tree-sitter-javascript';

export function getParserById(id: string | undefined): IParser | undefined {
  return parsers.find((item) => item.id === id);
}

const router = createBrowserRouter(
  [
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
          loader: ({ params }) => {
            const parser = getParserById(params.parserId);

            return { parser };
          },
        },
      ],
    },
  ],
  {
    basename: '/tree-sitter-explorer',
  }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
