import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#fff]">
      <div className="max-w-screen-xl px-4 py-16 mx-auto lg:py-36 ">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2">
          <Fade triggerOnce direction="left">
            <Image
              className="rounded-full"
              src="/logo.svg"
              width={350}
              height={350}
              alt="Logo do CT Kings"
            />
          </Fade>

          <Fade triggerOnce direction="right" damping={0.1}>
            <div>
              <span className="inline-block mb-4 text-2xl">🥋</span>
              <h2 className="mb-4 text-3xl">Sobre a Kings</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                amet nesciunt quod magni, mollitia earum sequi reiciendis ut,
                repellendus placeat quo, deleniti esse reprehenderit adipisci
                optio sit alias architecto eligendi nisi quidem eum. Obcaecati
                dicta incidunt, facilis minus ratione reiciendis?
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
