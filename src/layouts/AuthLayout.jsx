import { Outlet } from 'react-router-dom';
import { AuthNavbar } from '../components/navbars';

function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <div className="mx-auto container text-slate-500 mt-9">
        <Outlet />
      </div>
    </>

  );
}
export default AuthLayout;
