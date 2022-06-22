import styled, { css } from "styled-components";

const Button = styled.button`
  //styled.every html5 element (have helpers for every components...)
  //styled will create that html element for us
  color: white;
  background: ${(p) => (p.secondary ? "black" : "#f8049c")};
  font-weight: bold;
  /* padding: ${(p) => (p.large ? "16px" : "8px")}; */
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4;
          font-size: 1em;
        `}
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background-color: #eee;
    color: #666;
  }
`;

export { Button };
