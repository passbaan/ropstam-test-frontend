import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AuthNavbar() {
  const location = useLocation();
  const { pathname } = location;
  const routes = useMemo(() => ([
    {
      path: '/auth/login',
      name: 'Login',
      active: pathname === '/auth/login',
    },
    {
      path: '/auth/register',
      name: 'Register',
      active: pathname === '/auth/register',
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
    </nav>
  );
}
export default AuthNavbar;
