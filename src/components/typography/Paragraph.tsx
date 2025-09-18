import { COLOR, CoolGreyColor, PrimaryColor, SecondaryColor } from "@/src/types/colors";
import { BodyLevel, TYPOGRAPHY_BODY } from "@/src/types/typography";
import { CSSProperties } from "react";

type ParagraphProps = {
  level: BodyLevel;
  contents?: string;
  color: PrimaryColor | SecondaryColor | CoolGreyColor;
};

const Paragraph = ({ contents = "내용없음", level, color }: ParagraphProps) => {
  const paragraphStyle: CSSProperties = {
    ...TYPOGRAPHY_BODY[level],
    color: COLOR[color],
  };

  return <div style={paragraphStyle}>{contents}</div>;
};

export default Paragraph;
