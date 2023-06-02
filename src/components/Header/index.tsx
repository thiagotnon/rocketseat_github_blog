import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Logo GitHub Blog" />
      </Link>
    </HeaderContainer>
  );
};
