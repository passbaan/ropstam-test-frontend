import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth.context';

function MainNavbar() {
  const { logout } = useAuthContext();
  const location = useLocation();
  const { pathname } = location;
  const routes = useMemo(() => ([
    {
      path: '/categories',
      name: 'Categories',
      active: pathname === '/categories',
    },
    {
      path: '/cars',
      name: 'Cars',
      active: pathname === '/cars',
    },
  ]), [pathname]);
  return (
    <nav className="bg-green p-3 bg-orange-300 shadow text-stone-100 font-semibold flex">
      <ul className="ml-auto flex gap-2">
        {
          routes.map((route) => (
            <li
              className={`px-2 border-b-2  ${route.active ? 'border-slate-500 text-slate-500 pointer-events-none' : 'border-transparent'}`}
              key={`${route.path}`}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))
        }

      </ul>
      <button
        type="button"
        className="px-2 border-2 border-slate-500 text-stone-500 cursor-pointer hover:bg-white rounded-2xl"
        onClick={() => logout()}
        onKeyUp={() => logout()}
      >
        Logout
      </button>

    </nav>
  );
}
export default MainNavbar;
