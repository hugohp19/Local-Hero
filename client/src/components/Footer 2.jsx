import React from 'react';
import { NavLink } from 'react-router-dom';

function footer() {
  return (
    <nav>
      <NavLink to="./">Home</NavLink>
      <NavLink>Newsletter</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>FAQs</NavLink>
    </nav>
  );
}

export default footer;
