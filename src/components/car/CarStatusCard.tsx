import CarName from "./CarName";
import CarNumber from "./CarNumber";
import Status from "./Status";

const CarStatusCard = () => {
  return (
    <article style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName color="Black" contents="기아" />
        <Status status="holding" />
      </div>
      <CarNumber color="Black" contents="12가4567마" />
    </article>
  );
};

export default CarStatusCard;
