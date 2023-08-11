import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { IParser, parsers } from '../parsers';
import { defaultRoute, getParserById } from '..';
import { useEffect, useState } from 'react';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import GithubIcon from 'mdi-react/GithubIcon';

function Application() {
  const navigate = useNavigate();
  const params = useParams();
  const [parser, setParser] = useState<IParser | undefined>(
    getParserById(params.parserId)
  );

  useEffect(() => {
    if (params.parserId === undefined) {
      navigate(defaultRoute);
    }
  }, [navigate, params.parserId]);

  useEffect(() => {
    setParser(getParserById(params.parserId));
  }, [params.parserId]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex-none h-16 flex items-center px-3 sm:px-4 lg:px-6 shadow">
        <h1 className="flex-none text-xl font-bold">
          <a href="/tree-sitter-explorer">Tree-sitter explorer</a>
        </h1>

        <select
          className="block rounded-md border-0 ring-1 ring-inset ring-gray-300 py-1.5 px-2 ml-4 bg-white"
          onChange={(e) => {
            navigate(`/parser/${e.target.value}`);
          }}
          value={params.parserId}
        >
          {parsers.map((item) => (
            <option value={item.id} key={item.id}>
              {item.id}
            </option>
          ))}
        </select>

        {parser && (
          <>
            <a
              href={parser.homepage}
              className="ml-4 inline-flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              Homepage <OpenInNewIcon className="-mt-2" size={10} />
            </a>
            <span className="ml-4">Version: {parser.version}</span>
          </>
        )}

        <a
          href="https://github.com/kaermorchen/tree-sitter-explorer"
          className="ml-auto inline-flex items-center"
        >
          <GithubIcon className="mr-1" size={20}/>
          GitHub
        </a>
      </header>

      <main className="grow flex">
        <Outlet />
      </main>
    </div>
  );
}

export default Application;
