import { COLOR, FullColor } from "@/src/types/colors";
import { HeaderLevel, TYPOGRAPHY_HEADER } from "@/src/types/typography";
import { CSSProperties } from "react";

type TitleProps = {
  level: HeaderLevel;
  contents?: string;
  color: FullColor;
};

const Title = ({ contents = "내용없음", level, color }: TitleProps) => {
  const titleStyle: CSSProperties = {
    ...TYPOGRAPHY_HEADER[level],
    color: COLOR[color],
  };

  return <div style={titleStyle}>{contents}</div>;
};

export default Title;
