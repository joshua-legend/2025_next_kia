import { COLOR, FullColor } from "@/src/types/colors";
import { TYPOGRAPHY_BODY } from "@/src/types/typography";
import { CSSProperties } from "react";

export type carNameProps = {
  carName?: string;
  color: Extract<FullColor, "Black" | "CoolGrey40">;
};

const CarName = ({ carName = "내용없음", color }: carNameProps) => {
  const carNameStyle: CSSProperties = {
    ...TYPOGRAPHY_BODY["B2"],
    color: COLOR[color],
  };

  return <div style={carNameStyle}>{carName}</div>;
};

export default CarName;
