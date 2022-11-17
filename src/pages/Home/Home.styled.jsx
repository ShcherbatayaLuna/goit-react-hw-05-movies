import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 0;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 15px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  width: 100%;
  text-decoration: none;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;

  color: black;

  :hover,
  :focus {
    color: red;
  }
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  /* display: flex; */
  /* margin-bottom: 10px; */
`;

export const FilmBox = styled.div`
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
`;

export const Film = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
`;
