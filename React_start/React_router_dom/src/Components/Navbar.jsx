// import React from 'react';

<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const isActiveValue = {
    background: 'tomato',
    padding: '0.5rem 0.8rem',
    border: '2px solid #000',
    borderRadius: '10px',
    color: '#000',
  };

=======
import { Link } from 'react-router-dom';

export const Navbar = () => {
>>>>>>> 536a6aba62cdfa3124d1e3ef7e5285caf9ad743f
  const data = [
    {
      path: '/',
      element: 'home',
    },
    {
      path: '/about',
      element: 'about',
    },
    {
      path: '/cart',
      element: 'cartpage',
    },
    {
      path: '/login',
      element: 'login',
    },
  ];

  return (
    <div
      style={{
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px 0',
<<<<<<< HEAD
        textDecoration: 'none',
        color: 'black',
=======
>>>>>>> 536a6aba62cdfa3124d1e3ef7e5285caf9ad743f
      }}
    >
      {data.map((el, i) => {
        return (
<<<<<<< HEAD
          <NavLink
            to={el.path}
            key={i}
            style={({ isActive }) => {
              return isActive
                ? {
                    ...isActiveValue,
                    textDecoration: 'none',
                  }
                : {
                    ...isActiveValue,
                    textDecoration: 'none',
                    background: 'transparent',
                  };
            }}
          >
            {el.element}
          </NavLink>
=======
          <Link
            to={el.path}
            key={i}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {el.element}
          </Link>
>>>>>>> 536a6aba62cdfa3124d1e3ef7e5285caf9ad743f
        );
      })}
    </div>
  );
};
