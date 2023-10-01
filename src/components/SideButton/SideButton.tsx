import { MdArrowForwardIos } from "react-icons/md";
import { Interpolation, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";


const IconWrap = styled.div({
  background: "rgba(220, 220, 220, 0.25)",
  height: "62px",
  width: "62px",
  borderRadius: "100%",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const iconStyle = css({
  color: "rgb(165, 165, 165)",
  fontSize: "26px",
});

const ButtonWrap = styled.div({
  display: "grid",
  gridTemplate: "1fr / 62px 1fr 26px",
  alignItems: "center",
  fontSize: "21px",
  cursor: "pointer",
});

const Text = styled.p({
  marginLeft: "25px",
});

interface ISideButton {
  text: string;
  Icon: FC<{
    css: Interpolation<Theme>
  }>;
}

const SideButton: FC<ISideButton> = ({ text, Icon }) => {
  return (
    <ButtonWrap>
      <IconWrap css>
        <Icon css={iconStyle}/>
      </IconWrap>
      <Text>
        {text}
      </Text>
      <MdArrowForwardIos />
    </ButtonWrap>
  )
}

export default SideButton
