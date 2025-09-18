import Status from "@/src/components/car/Status";
import Paragraph from "@/src/components/typography/Paragraph";
import Title from "@/src/components/typography/Title";

export default function Home() {
  return (
    <div>
      <Title level="H1" color="GreenDefaultNormal" />
      <Paragraph level="B2" color="CoolGrey50" />
      <Status status="incompleted" />
    </div>
  );
}
