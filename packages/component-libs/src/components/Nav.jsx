import { Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ children, to }) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}

export default function Nav() {
  return (
    <Flex gap={16} className="nav">
      <NavItem to="/">Form</NavItem>
      <NavItem to="/photos">Photography</NavItem>
    </Flex>
  );
}
