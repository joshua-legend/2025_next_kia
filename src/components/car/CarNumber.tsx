import { COLOR, FullColor } from "@/src/types/colors";
import { TYPOGRAPHY_HEADER } from "@/src/types/typography";
import { CSSProperties } from "react";

export type CarNumberProps = {
  carNumber?: string;
  color: Extract<FullColor, "Black" | "CoolGrey40">;
};

const CarNumber = ({ carNumber = "내용없음", color }: CarNumberProps) => {
  const carNumberStyle: CSSProperties = {
    ...TYPOGRAPHY_HEADER["H1"],
    color: COLOR[color],
  };

  return <div style={carNumberStyle}>{carNumber}</div>;
};

export default CarNumber;
