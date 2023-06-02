import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme["base-title"]};
    }
    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-weight: 700;
      transition: all 0.2s ease-in-out;
      font-size: 0.75rem;
      line-height: 0;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
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
