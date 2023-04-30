import Image from "next/image";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col items-center justify-center max-w-screen-xl gap-6 px-4 py-8 mx-auto mb-4 center">
        <Image src="logo.svg" width={100} height={100} alt="" />
        <ul className="flex gap-4">
          <li>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram size={32} color="#fff" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <FaWhatsapp size={32} color="#fff" />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full p-2 text-center bg-white">
        <p>&copy; 2023 CT Kings</p>
      </div>
    </footer>
  );
}
