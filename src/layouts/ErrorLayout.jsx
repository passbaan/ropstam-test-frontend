import { Outlet } from 'react-router-dom';

function ErrorLayout() {
  return (
    <div className="mx-auto container">
      <Outlet />
    </div>
  );
}
export default ErrorLayout;
