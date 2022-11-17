import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 0;
`;

export const BackLink = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  text-decoration: none;
  color: black;

  :hover,
  :focus {
    color: red;
  }
`;

export const Box = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const BoxInfo = styled.div`
  padding: 20px 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  color: black;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const Score = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 400;
`;

export const TitleSecondary = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const Overview = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 400;
`;

export const ListGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ItemGenres = styled.li`
  margin-right: 15px;
`;

export const Info = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  color: black;
`;

export const ItemLink = styled.li`
  margin-bottom: 15px;
`;

export const Link = styled(NavLink)`
  font-weight: 400;
  text-decoration: none;
  color: black;

  :hover,
  :focus {
    color: red;
  }
`;
