import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const invertRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.palette.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.palette.white};
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${({ theme }) =>
        theme.mode === "light" ? rotate : invertRotate}
      infinite 20s linear;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.primary};
}`;
