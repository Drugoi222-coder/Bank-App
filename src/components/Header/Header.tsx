import logo from "../../assets/img/logo.svg";
import ava from "../../assets/img/ava.jpg";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const headerStyle = css({
  height: "160px",
  padding: "33px 30px 30px 30px",
  display: "flex",
  justifyContent: "space-between"
});

const ImgWrap = styled.div({
  height: "100%",
});

const logoStyle = css({
  height: "100%",
});

const Profile = styled.div({
  border: "none",
  width: "22%",
  borderRadius: "70px",
  display: "flex",
  justifyContent: "space-between",
  background: "white",
  paddingRight: "10px",
  paddingLeft: "44px",
  fontSize: "21px",
  boxShadow: "0px 1px 3px rgba(217, 217, 217, 1)",
  ":focus": {
    outline: "none",
  },
  "span": {
    fontSize: "26px",
    fontFamily: "Urbanist-Bold",
    color: "var(--main-color)",
  }
});

const NavMenu = styled.nav({
  backgroundColor: "white",
  borderRadius: "70px",
  width: "69.5%",
  fontSize: "21px",
  boxShadow: "0px 1px 3px rgba(217, 217, 217, 1)",
  padding: "35px 116px 0 108px",
});

const ListMenu = styled.ul({
  display: "flex",
  justifyContent: "space-between",
  listStyle: "none",
  padding: "0",
});

const styleLink = css({
  color: "black",
  textDecoration: "none",
});

const AvatarWrap = styled.div({
  height: "74%",
  marginTop: "12px",
  borderRadius: "100%",
  overflow: "hidden",
});

const avaStyle = css({
  height: "100%",
  width: "73px",
  objectFit: "cover",
});

const HelloSign = styled.p({
  margin: "0",
  padding: "0",
  paddingTop: "34px",
});

const Header = () => {
  return (
    <header css={headerStyle}>
      <ImgWrap>
        <img css={logoStyle} src={logo} alt="Logotype" />
      </ImgWrap>
      <Profile>
        <HelloSign>
          Welcome back, <span>Jelly!</span>
        </HelloSign>
        <AvatarWrap>
          <img css={avaStyle} src={ava}/>
        </AvatarWrap>
      </Profile>
      <NavMenu>
        <ListMenu>
          <li>
            <a css={styleLink} href="#">Summary</a>
          </li>
          <li>
            <a css={styleLink} href="#">Cards</a>
          </li>
          <li>
            <a css={styleLink} href="#">Activity</a>
          </li>
          <li>
            <a css={styleLink} href="#">Recipients</a>
          </li>
          <li>
            <a css={styleLink} href="#">Help Center</a>
          </li>
          <li>
            <a css={styleLink} href="#">Earn Gifts</a>
          </li>
        </ListMenu>
      </NavMenu>
    </header>
  );
};

export default Header;
