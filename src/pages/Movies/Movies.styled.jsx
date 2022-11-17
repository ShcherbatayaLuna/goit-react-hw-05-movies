import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Form = styled.form`
  padding: 3px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 240px;
  padding: 6px;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;

  :hover,
  :focus {
    border: 2px solid #f89999;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;

  color: black;
  background-color: #f89999;

  :hover,
  :focus {
    color: #f89999;
    background-color: black;
    cursor: pointer;
  }
`;

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1;

  text-align: center;

  color: black;
`;
