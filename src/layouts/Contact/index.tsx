import SectionTitle from "@/components/SectionTitle";
import { Fade } from "react-awesome-reveal";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto text-center">
        <Fade triggerOnce>
          <SectionTitle title="Contato" textColor="dark" />
        </Fade>
        <div className="grid grid-cols-1 gap-20 mt-12 md:grid-cols-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.138233286021!2d-51.97265762372982!3d-30.11885773473254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ba6dd68333755%3A0x33724773631c885!2sR.%20do%20Com%C3%A9rcio%20-%20Centro%2C%20Buti%C3%A1%20-%20RS%2C%2096750-000!5e0!3m2!1spt-BR!2sbr!4v1682712022645!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
          ></iframe>
          <Fade cascade triggerOnce damping={0.3} direction="down">
            <ul className="flex flex-col items-start gap-4 ">
              <li className="flex items-center gap-3">
                <HiMapPin />
                Rua do Comércio, XXX - Centro
              </li>
              <li className="flex items-center gap-3">
                <HiPhone />
                (51) XXXXX-XXXX
              </li>
              <li className="flex items-center gap-3">
                <HiEnvelope />
                ctkings@mail.com
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
}
