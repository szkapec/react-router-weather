import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Default() {
  return (
    <StyledDefault>
      Error 404 <div>Nie ma takiej strony</div>
      <NavLink to="/">
        <button color="#7f8c8d">Wróć do strony głównej</button>
      </NavLink>
    </StyledDefault>
  );
}

const StyledDefault = styled.div`
  color: red;
  text-align: center;
  padding-top: 100px;
  height: 100vh;
  background-color: #ecf0f1;
  font-size: 28px;
  font-weight: 700;
  div {
    color: black;
    padding: 30px;
  }
  a {
    text-decoration: none;
  }
  button {
background-color: #1b4778;
  padding: 8px 14px;
  display: block;
  margin: 10px auto 10px;
  border: none;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  list-style: none;
  outline: 0;
  min-width: 190px;
  color: white;

  a {
    text-decoration: none;
    color: white;
    list-style: none;
  }
  :hover {
    color: white;
    font-size: 20px;
    transition-duration: 1s;
    @media (min-width: 600px) {
      font-size: 18px;
      text-decoration: underline;
    }
  }

  }
`;
