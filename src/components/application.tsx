import { Link, Outlet } from 'react-router-dom';
import { parsers } from '../parsers';

function Application() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex-none flex items-center px-3 py-4 sm:px-4 lg:px-6 shadow">
        <h1 className="flex-none text-xl font-bold">Tree-sitter explorer</h1>

        <nav className="ml-4 flex items-baseline gap-4" role="navigation">
          {parsers.map((parser) => (
            <Link to={`parser/${parser.id}`} key={parser.id}>
              {parser.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="grow flex">
        <Outlet />
      </main>
    </div>
  );
}

export default Application;
