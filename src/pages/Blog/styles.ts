import styled from "styled-components";

export const BlogPosts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadignContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 10px;

  svg {
    color: ${(props) => props.theme.blue};
  }
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 10px;
`;
