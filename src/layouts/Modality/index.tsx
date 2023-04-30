import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { modalityList } from "@/constants";

export default function Modality() {
  return (
    <section
      id="modality"
      className="max-w-screen-xl text-center px-4 py-16 mx-auto lg:mt-[113px]"
    >
      <SectionTitle
        title="Modalidades"
        description="Temos variadades de esportes para praticar a qualquer hora, quantas vezes quiser!"
      />
      <div className="mx-auto mt-12">
        <Tabs defaultValue={modalityList[0].value} className="w-full ">
          <TabsList className="mb-8">
            {modalityList.map((modality, index) => (
              <TabsTrigger
                key={index}
                className="w-32 p-2"
                value={modality.value}
              >
                {modality.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {modalityList.map(({ id, description, image, title, value }) => (
            <TabsContent key={id} value={value} className="h-[500px]">
              <div className="grid grid-cols-1 gap-4 md:gap-20 md:grid-cols-2">
                <div className="overflow-hidden ">
                  <Image
                    className="object-cover w-full h-full"
                    src={image}
                    alt="Dois meninos lutando jiu jitsu"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="">
                  <h2 className="mb-8 text-3xl text-white">{title}</h2>
                  <p className="leading-relaxed text-white">{description}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
