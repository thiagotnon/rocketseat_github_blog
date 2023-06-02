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
