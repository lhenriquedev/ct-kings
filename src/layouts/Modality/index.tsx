import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { modalityList } from "@/constants";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Fade } from "react-awesome-reveal";

export default function Modality() {
  return (
    <section
      id="modality"
      className="max-w-screen-xl px-4 py-16 mx-auto text-center "
    >
      <SectionTitle
        title="Modalidades"
        description="Temos variadades de esportes para praticar a qualquer hora, quantas vezes quiser!"
      />
      <Fade triggerOnce direction="left" cascade>
        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-3 md:grid-cols-2">
          {modalityList.map(({ id, description, image, title }) => (
            <Card key={id} className="">
              <div className="mb-6 overflow-hidden rounded-t-lg">
                <Image
                  className="object-cover w-full h-48"
                  src={image}
                  width={500}
                  height={192}
                  alt=""
                />
              </div>
              <CardContent>
                <h2 className="text-2xl">{title}</h2>
              </CardContent>
              <CardFooter>
                <p>{description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Fade>
    </section>
  );
}
