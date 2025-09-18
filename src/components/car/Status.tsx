import { CoolGreyColor, PrimaryColor, SecondaryColor } from "@/src/types/colors";
import Paragraph from "../typography/Paragraph";

type StatusKR = "완료" | "미완료" | "대기";
type Status = "completed" | "incompleted" | "holding";
type StatusKey = {
  contents: StatusKR;
  color: PrimaryColor | SecondaryColor | CoolGreyColor;
};
type StatusProps = {
  status: Status;
};

const Status = ({ status }: StatusProps) => {
  const statusObj: Record<Status, StatusKey> = {
    completed: {
      contents: "완료",
      color: "CoolGrey40",
    },
    incompleted: {
      contents: "미완료",
      color: "RedDefaultNormal",
    },
    holding: {
      contents: "대기",
      color: "GreenDefaultNormal",
    },
  };

  return <Paragraph {...statusObj[status]} level="B2" />;
};

export default Status;
