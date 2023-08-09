import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { parsers } from '../parsers';
import { defaultRoute } from '..';
import { useEffect } from 'react';

function Application() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.parserId === undefined) {
      navigate(defaultRoute);
    }
  }, [navigate, params.parserId]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex-none flex items-center px-3 py-4 sm:px-4 lg:px-6 shadow">
        <h1 className="flex-none text-xl font-bold">Tree-sitter explorer</h1>

        <select
          className="block w-full rounded-md border-0 ring-1 ring-inset ring-gray-300 py-1.5 px-2 ml-4 max-w-xs bg-white"
          onChange={(e) => {
            navigate(`/parser/${e.target.value}`);
          }}
          value={params.parserId}
        >
          {parsers.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </header>

      <main className="grow flex">
        <Outlet />
      </main>
    </div>
  );
}

export default Application;
