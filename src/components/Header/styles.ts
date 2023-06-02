import styled from "styled-components";
export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-color: ${(props) => props.theme["base-profile"]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 18.5rem;

    img {
      margin-bottom: 8.375rem;
      position: relative;
      z-index: 9;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      max-width: 890px;
      height: 52px;
      bottom: 1rem;
      background: ${(props) => props.theme.blue};
      filter: blur(106px);
      z-index: 0;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: url("../../right_effect.svg") no-repeat;
    background-position: right 1.875rem;

    position: absolute;
    right: 0;
    top: 0;

    &::after {
      content: "";
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: red;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: url("../../left_effect.svg") no-repeat;
    background-position: left 4.375rem;

    position: absolute;
    left: 0;
    top: 0;
  }
`;
