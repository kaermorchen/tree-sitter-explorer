import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function Parser() {
  const [code, setCode] = useState(`hello`);

  return (
    <div className="flex-1 flex items-stretch mt-4">
      <textarea
        className="flex-1 border-r-1"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
      />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Parser;
