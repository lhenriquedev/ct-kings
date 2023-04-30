import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="max-w-screen-xl px-4 py-8 mx-auto mt-[113px]">
      <div className="grid items-center justify-between grid-cols-1 text-white gap-9 lg:gap-48 lg:grid-cols-2 height-without-header">
        <div className="flex flex-col">
          <span className="">Seja bem vindo a Kings 🥋</span>
          <h1 className="my-6 text-4xl md:text-6xl">
            Centro de treinamentos de artes marciais
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi
            repudiandae, ipsum delectus nemo molestias ratione dolorem,
            excepturi explicabo culpa nulla obcaecati possimus amet quos!
          </p>
        </div>
        <div>
          <Image
            className="rounded-xl"
            src="/bjj-hero.jpg"
            width={600}
            height={600}
            alt="Tatame da academia Kings"
          />
        </div>
      </div>
    </section>
  );
}
