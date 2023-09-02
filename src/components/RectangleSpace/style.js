import { styled } from "styled-components";

export const Rectangle = styled.div`
  min-height: 37.5rem;
  max-height: auto;
  background-color: #ffffff;
  box-shadow: 0.0625rem 0.25rem 0.25rem 0.0625rem rgba(85, 85, 85, 0.25);
  border-radius: 0.9375rem;
  -webkit-border-radius: 0.9375rem;
  -moz-border-radius: 0.9375rem;
  -ms-border-radius: 0.9375rem;
  -o-border-radius: 0.9375rem;

  & img {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }
`;
