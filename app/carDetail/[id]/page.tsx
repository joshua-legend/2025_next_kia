"use client";
import { StatusType } from "@/src/components/car/CarStatus";
import Paragraph from "@/src/components/typography/Paragraph";
import Title from "@/src/components/typography/Title";
import { cars } from "@/src/data/cars";
import { COLOR } from "@/src/types/colors";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  if (!id) return <div>id를 입력하세요.</div>;

  const target = cars.find((v) => v.id == +id);

  if (!target) return <div>없는 차입니다.</div>;

  const carCardObj: Record<StatusType, any> = {
    incompleted: {
      backgroundColor: COLOR.RedLigthBg,
      color: COLOR.RedDefaultNormal,
      contents: "미완료",
    },
    holding: {
      backgroundColor: COLOR.GreenLigthBg,
      color: COLOR.GreenDefaultNormal,
      contents: "대기",
    },
    completed: {
      backgroundColor: COLOR.CoolGrey5,
      color: COLOR.CoolGrey40,
      contents: "완료",
    },
  };

  return (
    <>
      <div style={{ backgroundColor: carCardObj[target?.status].backgroundColor, padding: "24px" }}>
        <Paragraph contents={carCardObj[target?.status].contents} level="B2" color={carCardObj[target?.status].color} />
        <Title contents="인증검수" level="H1" color={"Black"} />
      </div>
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <Title contents="차량정보" level="H2" color={"Black"} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Paragraph contents={"차량번호"} level="B2" color={"CoolGrey60"} />
          <Paragraph contents={target.carNumber} level="B2" color={"Black"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Paragraph contents={"차량명"} level="B2" color={"CoolGrey60"} />
          <Paragraph contents={target.carName} level="B2" color={"Black"} />
        </div>
      </div>
    </>
  );
};

export default Page;
