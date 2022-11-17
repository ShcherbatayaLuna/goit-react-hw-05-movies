import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: #f89999;
    border-radius: 15px;
    cursor: pointer;
  }
`;
