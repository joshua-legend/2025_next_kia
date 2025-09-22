import { COLOR } from "@/src/types/colors";

type TabProps = {
  onClick: () => void;
  isActive: boolean;
  tabContents: "진행대기" | "완료";
  count: number;
};

const Tab = ({ onClick, isActive, tabContents, count }: TabProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px 40px",
        textAlign: "center",
        flex: "1",
        borderBottom: `2px solid ${isActive ? COLOR.Black : "white"}`,
        color: isActive ? COLOR.Black : COLOR.CoolGrey40,
      }}
    >
      {tabContents} {count}
    </div>
  );
};

export default Tab;
