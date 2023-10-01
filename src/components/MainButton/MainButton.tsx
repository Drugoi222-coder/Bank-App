import { css } from "@emotion/react";
import { FC } from "react";

interface IMainButton {
  text: string;
  textColor?: string;
  color?: string;
  Icon: FC;
}

const MainButton: FC<IMainButton> = ({ text, textColor, color, Icon }) => {
  return (
    <div
      css={css({
        color: textColor ?? "white",
        background: color ?? "var(--main-color)",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "50px",
        fontSize: "21px",
        padding: "27px 34px 25px 41px"
      })}
    >
      <p>{text}</p>
      <Icon />
    </div>
  );
};

export default MainButton;
