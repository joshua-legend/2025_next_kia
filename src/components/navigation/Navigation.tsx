import { useState } from "react";
import Tab from "./Tab";

type navigationProps = {
  pendingCount: number;
  completedCount: number;
  isLeft: boolean;
  leftclick: () => void;
  rightclick: () => void;
};

const Navigation = ({ completedCount, pendingCount, leftclick, rightclick, isLeft }: navigationProps) => {
  return (
    <nav style={{ display: "flex" }}>
      <Tab onClick={leftclick} tabContents="진행대기" count={pendingCount} isActive={!isLeft} />
      <Tab onClick={rightclick} tabContents="완료" count={completedCount} isActive={isLeft} />
    </nav>
  );
};

export default Navigation;
