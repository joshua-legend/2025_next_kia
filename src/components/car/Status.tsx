import { FullColor } from "@/src/types/colors";
import Paragraph from "../typography/Paragraph";

type Status = "completed" | "incompleted" | "holding";
type StatusProps = {
  status: Status;
};
type StatusKey = {
  contents: "완료" | "미완료" | "대기";
  color: FullColor;
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
