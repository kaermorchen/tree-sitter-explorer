import { Outlet } from "react-router-dom";

function Application() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex-none flex items-center px-3 py-4 sm:px-4 lg:px-6 shadow">
        <h1 className="flex-none text-xl font-bold">Tree-sitter explorer</h1>
      </header>

      <main className="grow flex">
        <Outlet />
      </main>
    </div>
  );
}

export default Application;
