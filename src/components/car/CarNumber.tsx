import { COLOR, FullColor } from "@/src/types/colors";
import { TYPOGRAPHY_HEADER } from "@/src/types/typography";
import { CSSProperties } from "react";

type CarNumberProps = {
  contents?: string;
  color: Extract<FullColor, "CoolGrey40" | "Black">;
};

const CarNumber = ({ contents = "내용없음", color }: CarNumberProps) => {
  const carNumberStyle: CSSProperties = {
    ...TYPOGRAPHY_HEADER["H1"],
    color: COLOR[color],
  };

  return <div style={carNumberStyle}>{contents}</div>;
};

export default CarNumber;
