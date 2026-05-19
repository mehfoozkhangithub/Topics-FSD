import React from 'react';

import { Link } from 'react-router-dom';

export const Navbar = () => {
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
      }}
    >
      {data.map((el, i) => {
        return (
          <Link
            to={el.path}
            key={i}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {el.element}
          </Link>
        );
      })}
    </div>
  );
};
