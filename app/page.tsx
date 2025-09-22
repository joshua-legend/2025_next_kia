"use client";

import CarCard from "@/src/components/car/CarCard";
import Navigation from "@/src/components/navigation/Navigation";
import { cars } from "@/src/data/cars";
import { useState } from "react";

export default function Home() {
  const [isLeft, setIsLeft] = useState<boolean>(false);
  const click = (isLeft: boolean) => {
    setIsLeft((prev) => isLeft);
  };
  return (
    <>
      <Navigation isLeft={isLeft} leftclick={() => click(false)} rightclick={() => click(true)} completedCount={cars.filter((v: any) => v.status == "completed").length} pendingCount={cars.filter((v: any) => v.status != "completed").length} />
      {cars
        .filter((v) => (isLeft ? v.status == "completed" : v.status != "completed"))
        .map((v, i) => (
          <CarCard key={i} {...v} />
        ))}
    </>
  );
}
