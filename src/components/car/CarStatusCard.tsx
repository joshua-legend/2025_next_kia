import { COLOR } from "@/src/types/colors";
import CarName, { CarNameProps } from "./CarName";
import CarNumber, { CarNumberProps } from "./CarNumber";
import Status from "./Status";

type CarStatusCardProps = CarNameProps & CarNumberProps;

const CarStatusCard = ({ carName, carNumber, color }: CarStatusCardProps) => {
  return (
    <article style={{ backgroundColor: COLOR.GreenDarkNormal, padding: "20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName color="Black" carName="기아" />
        <Status status="holding" />
      </div>
      <CarNumber color="Black" carNumber="12가4567마" />
    </article>
  );
};

export default CarStatusCard;
