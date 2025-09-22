import { COLOR } from "@/src/types/colors";
import CarName, { carNameProps } from "./CarName";
import CarNumber, { CarNumberProps } from "./CarNumber";
import CarStatus, { CarStatusProps, StatusType } from "./CarStatus";

export type CarCardProps = Omit<carNameProps & CarNumberProps & CarStatusProps, "color">;

const CarCard = ({ carName, carNumber, status }: CarCardProps) => {
  const carCardObj: Record<StatusType, any> = {
    incompleted: {
      backgroundColor: COLOR.RedLigthBg,
      color: COLOR.Black,
    },
    holding: {
      backgroundColor: COLOR.GreenLigthBg,
      color: COLOR.Black,
    },
    completed: {
      backgroundColor: COLOR.CoolGrey5,
      color: COLOR.CoolGrey40,
    },
  };

  return (
    <article style={{ backgroundColor: carCardObj[status].backgroundColor, display: "flex", flexDirection: "column", gap: "8px", padding: "20px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName carName={carName} color={carCardObj[status].color} />
        <CarStatus status={status} />
      </div>
      <CarNumber carNumber={carNumber} color={carCardObj[status].color} />
    </article>
  );
};

export default CarCard;
