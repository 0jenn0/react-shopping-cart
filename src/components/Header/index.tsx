import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/arrowIcon.png";
import HeaderLogo from "../../assets/headerLogo.png";
import { HeaderButtonContainer, HeaderContainer } from "./style";

interface HeaderProps {
  isShowLogo: boolean;
}

export default function Header({ isShowLogo }: HeaderProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      {isShowLogo ? (
        <img src={HeaderLogo} alt="Shop Logo" />
      ) : (
        <HeaderButtonContainer onClick={handleGoBack}>
          <img src={ArrowIcon} alt="Previous Page" />
        </HeaderButtonContainer>
      )}
    </HeaderContainer>
  );
}
