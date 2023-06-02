import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;

export const CardHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
  }
`;

export const CardBody = styled.div`
  width: 100%;
`;
