import { COLOR, FullColor } from "@/src/types/colors";
import { TYPOGRAPHY_BODY } from "@/src/types/typography";
import { CSSProperties } from "react";

export type StatusType = "holding" | "completed" | "incompleted";

export type CarStatusProps = {
  status: StatusType;
};

const CarStatus = ({ status }: CarStatusProps) => {
  const carObj: Record<StatusType, any> = {
    holding: {
      contents: "대기",
      color: COLOR.GreenDefaultNormal,
    },
    completed: {
      contents: "완료",
      color: COLOR.CoolGrey40,
    },
    incompleted: {
      contents: "미완료",
      color: COLOR.RedDefaultNormal,
    },
  };

  const paragraphStyle: CSSProperties = {
    ...TYPOGRAPHY_BODY["B2"],
    color: carObj[status].color,
  };

  return <div style={paragraphStyle}>{carObj[status].contents}</div>;
};

export default CarStatus;
