import CarCard from "@/src/components/car/CarCard";

export default function Home() {
  return (
    <>
      <CarCard carName="테슬라" carNumber="12가1212" status="completed" />
      <CarCard carName="모닝" carNumber="54나2232" status="incompleted" />
      <CarCard carName="셀토스" carNumber="99파1234" status="holding" />
      <CarCard carName="테슬라" carNumber="12가1212" status="completed" />
      <CarCard carName="모닝" carNumber="54나2232" status="incompleted" />
      <CarCard carName="셀토스" carNumber="99파1234" status="holding" />
    </>
  );
}
