import CarCard from "@/src/components/car/CarCard";
import { cars } from "@/src/data/cars";

export default function Home() {
  return (
    <>
      {cars.map((v, i) => (
        <CarCard key={i} {...v} />
      ))}
    </>
  );
}
