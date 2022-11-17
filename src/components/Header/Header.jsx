import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, Link } from './Header.styled';

const Header = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
