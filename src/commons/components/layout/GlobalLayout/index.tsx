import { Outlet } from 'react-router-dom';

export default function GlobalLayout() {
  return (
    <div className="w-full h-screen overflow-y-auto custom-scrollbar">
      <Outlet />
    </div>
  );
}
