import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="height-without-header"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(hero-bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto mt-[113px] flex items-center justify-center h-full">
        <div className="max-w-2xl text-center text-white">
          <div className="flex flex-col">
            <span className="">Seja bem vindo a Kings 🥋</span>
            <h1 className="my-6 text-4xl md:text-6xl">
              Centro de treinamentos <br /> de artes marciais
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              quasi repudiandae, ipsum delectus nemo molestias ratione dolorem,
              excepturi explicabo culpa nulla obcaecati possimus amet quos!
            </p>
            <Link
              href="#modality"
              scroll={false}
              className="px-10 py-4 mx-auto transition-all duration-300 bg-black rounded-md tra hover:bg-white hover:text-black"
            >
              Ver modalidades
            </Link>
          </div>
          {/* <div>
            <Image
              className="rounded-xl"
              src="/bjj-hero.jpg"
              width={600}
              height={600}
              alt="Tatame da academia Kings"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
