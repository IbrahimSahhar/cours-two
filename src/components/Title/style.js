import { styled } from "styled-components";

export const TitleStyle = styled.h2`
  max-width: 12.25rem;
  margin: auto;
  &:after {
    content: "";
    position: absolute;
    top: 140%;
    left: 0;
    background-color: rgb(220, 53, 69);
    height: 0.25rem;
    width: 100%;
  }
`;
