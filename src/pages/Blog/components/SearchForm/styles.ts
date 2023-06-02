import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    label {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-weight: 700;
    }
    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
