import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 15px;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.5;
`;

export const Link = styled(NavLink)`
  width: 100%;
  text-decoration: none;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  color: black;

  :hover,
  :focus {
    color: red;
  }
`;
