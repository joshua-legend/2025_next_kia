import { COLOR, FullColor } from "@/src/types/colors";
import { BodyLevel, TYPOGRAPHY_BODY } from "@/src/types/typography";
import { CSSProperties } from "react";

type CarNameProps = {
  contents?: string;
  color: Extract<FullColor, "Black" | "CoolGrey40">;
};

const CarName = ({ contents = "내용없음", color }: CarNameProps) => {
  const carNameStyle: CSSProperties = {
    ...TYPOGRAPHY_BODY["B1"],
    color: COLOR[color],
  };

  return <div style={carNameStyle}>{contents}</div>;
};

export default CarName;
