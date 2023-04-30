import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type TeacherCardProps = {
  modality: string;
  name: string;
  image: string;
  social: string;
  description: string;
};

export default function TeacherCard({
  description,
  image,
  modality,
  name,
  social,
}: TeacherCardProps) {
  return (
    <Card className="w-[350px]">
      <div className="mb-6 overflow-hidden rounded-t-lg">
        <Image src={image} width={350} height={130} alt="" />
      </div>
      <CardContent>
        <h2 className="mb-2 text-2xl">{name}</h2>
        <h3 className="mb-2 italic">{social}</h3>
        <h4 className="text-xl">{modality}</h4>
      </CardContent>
      <CardFooter>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
}
