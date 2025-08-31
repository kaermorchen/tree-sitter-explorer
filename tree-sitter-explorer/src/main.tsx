import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Application from './components/application';
import Parser from './components/parser';
import { parsers } from './parsers';
import type { IParser } from './parsers';
import { observer } from 'mobx-react';
import { StrictMode } from 'react';

export const defaultRoute = 'parser/tree-sitter-typescript';

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

const Main = observer(() => <RouterProvider router={router} />);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div id="modal-place" />
    <Main />
  </StrictMode>
);
