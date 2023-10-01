import styled from "@emotion/styled";
import { css } from "@emotion/react";
import cardLogo from "../../assets/img/Mastercard_2019_logo.svg.png";
import SideButton from "../SideButton/SideButton";
import { BsCreditCard } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { IoOptionsOutline } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";

const BarWrap = styled.div({
  fontSize: "27px",
  width: "532px",
  background: "white",
  borderRadius: "30px",
  marginLeft: "30px",
  position: "relative",
  zIndex: "0",
});

const SideBarHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

const ShowAllButton = styled.p({
  color: "var(--main-color)",
  fontSize: "21px",
  fontFamily: "Urbanist-Bold",
  marginTop: "3px",
  cursor: "pointer",
});

const cardStyle = css({
  background: "black",
  width: "448px",
  height: "206px",
  borderRadius: "24px 24px 0 0",
  marginTop: "70px",
  position: "relative",
  color: "white",
  padding: "42px 43px",
  paddingBottom: "0",
  fontSize: "29px",
  boxShadow: "0px -12px 20px rgba(1, 1, 1, 0.25)",
  ":before": {
    content: '""',
    position: "absolute",
    borderRadius: "24px",
    width: "388px",
    height: "200px",
    top: "-32px",
    left: "30px",
    zIndex: "-1",
    transform: "rotate(-2deg)",
    background: "var(--main-color)",
  },
});

const headerCardStyle = css({
  display: "flex",
  justifyContent: "space-between",
});

const cardLogoStyle = css({
  height: "20px",
  display: "block",
  marginRight: "20px",
  marginTop: "6px",
});

const cardBodyStyle = css({
  marginTop: "50px",
  letterSpacing: "7px",
  fontSize: "26px",
  fontFamily: "Urbanist-Thin",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const cvvStyle = css({
  fontSize: "15px",
  letterSpacing: "2px",
  background: "#2c2c2c",
  padding: "11px 20px 10px 20px",
  borderRadius: "20px",
  fontFamily: "Urbanist"
});

const CardsWrap = styled.div({
  padding: "43px 42px 0 42px",
  borderBottom: "3px solid #fafafa",
  position: "relative",
});

const ButtonsWrap = styled.div({
  padding: "42px",
});

const OptionsWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "340px",
});

const ClaimWrap = styled.div({
  display: "grid",
  gridTemplate: "1fr / 1fr 1fr",
  gap: "16px",
  marginTop: "65px",
});

const SideBar = () => {
  return (
    <BarWrap>
      <CardsWrap>
        <SideBarHeader>
          <p>Cards</p>
          <ShowAllButton>Show All</ShowAllButton>
        </SideBarHeader>
        <div css={cardStyle}>
          <div css={headerCardStyle}>
            Gordin Bogdan
            <img css={cardLogoStyle} src={cardLogo} alt="master card" />
          </div>
          <div css={cardBodyStyle}>
            <p>0123 4567 8910</p>
            <div css={cvvStyle}>CVV</div>
          </div>
        </div>
      </CardsWrap>
      <ButtonsWrap>
        <OptionsWrap>
          <SideButton text="Show Card Details" Icon={BsCreditCard} />
          <SideButton text="Your PIN" Icon={MdPassword} />
          <SideButton text="Security Code" Icon={TfiLock} />
          <SideButton text="Edit Limits" Icon={IoOptionsOutline} />
        </OptionsWrap>
        <ClaimWrap>
          <MainButton text="Add Card" Icon={AiOutlinePlus}/>
          <MainButton text="Remove" Icon={AiOutlineMinus} color="#fdf2f0" textColor="#af6f5e"/>
        </ClaimWrap>
      </ButtonsWrap>
    </BarWrap>
  );
};

export default SideBar;
