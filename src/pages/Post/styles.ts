import styled from "styled-components";

export const PostMetaContainer = styled.div`
  width: 100%;
`;

export const PostMetaContent = styled.header`
  background: ${(props) => props.theme["base-profile"]};

  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
  gap: 2rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-weight: 700;
      transition: all 0.2s ease-in-out;
      font-size: 0.75rem;
      line-height: 0;
      border-bottom: 1px solid transparent;
      text-transform: uppercase;

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
  }
  p {
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    li {
      align-items: center;
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme["base-subtitle"]};

      svg {
        color: ${(props) => props.theme["base-label"]};
        font-size: 1.125rem;
      }
    }
  }
`;

export const PostContent = styled.div`
  blockquote {
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-title"]};
    font-style: italic;
    padding: 2rem;
    border-left: 2px solid ${(props) => props.theme.blue};
    border-radius: 10px;
    margin-bottom: 1.5rem;
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  p {
    margin-bottom: 1.5rem;
    strong {
      font-weight: 700;
    }
  }
  padding: 2.5rem 2rem;
`;
