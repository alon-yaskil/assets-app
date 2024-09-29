import { AppTitle, Container, Logo, LogoContainer } from "../styles/header";

const Header = () => {
  return (
    <Container>
      <LogoContainer href="/">
        <Logo src={"/logo.svg"} />
        <AppTitle>Assets</AppTitle>
      </LogoContainer>
    </Container>
  );
};

export default Header;
