import { Outlet } from "react-router-dom";

function Parser() {
  return (
    <div className="flex-1 flex items-stretch mt-4">
      <div className="flex-1 border-r-1">asd</div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Parser;
