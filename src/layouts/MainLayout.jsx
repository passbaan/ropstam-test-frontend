import { Outlet } from 'react-router-dom';
import { MainNavbar } from '../components/navbars';

function MainLayout() {
  return (
    <>
      <MainNavbar />
      <div className="mx-auto container">
        <Outlet />
      </div>
    </>
  );
}
export default MainLayout;
